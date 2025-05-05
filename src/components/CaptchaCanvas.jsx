// components/CaptchaCanvas.js
import React, { useEffect, useRef } from 'react';

const CaptchaCanvas = ({ text, bgColor = 'white', fontColor = 'black' }) => {
    const canvasRef = useRef();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const charCount = text.length;

        canvas.width = charCount * 25;
        canvas.height = 40;

        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = 'italic 20px Arial';
        ctx.fillStyle = fontColor;
        ctx.textBaseline = 'middle';

        for (let i = 0; i < charCount; i++) {
            const x = 20 * i + 10;
            const y = 20 + Math.floor(Math.random() * 6) - 3;
            ctx.fillText(text[i], x, y);
        }
    }, [text, bgColor, fontColor]);

    return <canvas ref={canvasRef} />;
};

export default CaptchaCanvas;
