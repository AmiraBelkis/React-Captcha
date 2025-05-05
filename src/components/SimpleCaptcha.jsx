import React, { useEffect, useState } from 'react';
import CaptchaCanvas from './CaptchaCanvas';
import { loadCaptcha } from '../engine/captchaEngine';

const SimpleCaptcha = ({ length = 6, bgColor, fontColor, charMap }) => {
    const [captcha, setCaptcha] = useState('');

    useEffect(() => {
        setCaptcha(loadCaptcha(length, { charMap }));
    }, [length, charMap]);

    return (
        <div>
            <CaptchaCanvas text={captcha} bgColor={bgColor} fontColor={fontColor} />
        </div>
    );
};

export default SimpleCaptcha;
