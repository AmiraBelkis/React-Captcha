// components/CaptchaCanvas.js
import React, { useEffect, useRef } from 'react';

const CaptchaCanvas = ({ text, bgColor = 'white', fontColor = 'black' }) => {
    const canvasRef = useRef();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const charCount = text.length;

        canvas.width = charCount * 30;
        canvas.height = 50;

        // Background
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Random lines (noise)
        for (let i = 0; i < 5; i++) {
            ctx.beginPath();
            ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
            ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
            ctx.strokeStyle = getRandomColor();
            ctx.lineWidth = 1;
            ctx.stroke();
        }

        // Draw characters with slight distortion
        ctx.textBaseline = 'middle';
        ctx.font = 'italic 22px Arial';
        ctx.fillStyle = fontColor;

        for (let i = 0; i < charCount; i++) {
            const char = text[i];
            const x = 25 * i + 10;
            const y = 25 + Math.random() * 6 - 3;

            // Rotate slightly
            const angle = (Math.random() - 0.5) * 0.5;
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(angle);
            ctx.fillText(char, 0, 0);
            ctx.restore();
        }
    }, [text, bgColor, fontColor]);

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        return (
            '#' +
            Array.from({ length: 6 })
                .map(() => letters[Math.floor(Math.random() * 16)])
                .join('')
        );
    };

    return <canvas ref={canvasRef} />;
};

export default CaptchaCanvas;
