import { generateCaptchaText } from '../utils/captchaUtils';

let currentCaptcha = '';

export const loadCaptcha = (length = 6, options = {}) => {
    const text = generateCaptchaText(length, options.charMap);
    currentCaptcha = text;
    return text;
};

export const validateCaptcha = (input, reloadCallback) => {
    const isValid = input === currentCaptcha;
    if (!isValid && reloadCallback) reloadCallback();
    return isValid;
};
