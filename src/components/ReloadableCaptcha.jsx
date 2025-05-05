import React, { useState } from 'react';
import CaptchaCanvas from './CaptchaCanvas';
import { loadCaptcha } from '../engine/captchaEngine';

const ReloadableCaptcha = ({ length = 6, bgColor, fontColor, charMap, reloadText = 'Reload Captcha', reloadColor = 'blue' }) => {
    const [captcha, setCaptcha] = useState(() => loadCaptcha(length, { charMap }));

    const handleReload = () => {
        setCaptcha(loadCaptcha(length, { charMap }));
    };

    return (
        <div>
            <CaptchaCanvas text={captcha} bgColor={bgColor} fontColor={fontColor} />
            <div>
                <a onClick={handleReload} style={{ cursor: 'pointer', color: reloadColor }}>
                    {reloadText}
                </a>
            </div>
        </div>
    );
};

export default ReloadableCaptcha;
