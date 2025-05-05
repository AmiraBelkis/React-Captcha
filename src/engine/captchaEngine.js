// engine/captchaEngine.js
import { generateCaptchaText } from '../utils/captchaUtils';

let currentCaptcha = '';
let generatedAt = null;
const DEFAULT_EXPIRATION_MS = 2 * 20 * 1000; // 2 minutes

export const loadCaptcha = (length = 6, options = {}) => {
    const text = generateCaptchaText(length, options.charMap);
    currentCaptcha = text;
    generatedAt = new Date();
    return text;
};

export const validateCaptcha = (input, reloadCallback, expirationMs = DEFAULT_EXPIRATION_MS) => {
    const now = new Date();
    const isExpired = generatedAt && (now - generatedAt > expirationMs);

    if (isExpired) {
        if (reloadCallback) reloadCallback();
        return { valid: false, reason: 'expired' };
    }

    const isValid = input === currentCaptcha;

    if (!isValid && reloadCallback) reloadCallback();
    return { valid: isValid, reason: isValid ? null : 'mismatch' };
};
