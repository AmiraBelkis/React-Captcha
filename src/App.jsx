// App.js
import React, { useState } from 'react';
import { validateCaptcha } from './engine/captchaEngine';
import ReloadableCaptcha from './components/ReloadableCaptcha';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleValidation = () => {
    const { valid, reason } = validateCaptcha(input, () => window.location.reload());

    if (valid) setResult('✅ Captcha correct!');
    else if (reason === 'expired') setResult('⏰ Captcha expired. Please try again.');
    else if (reason === 'mismatch') setResult('❌ Incorrect captcha. Try again.');
  };

  return (
    <div style={{
      margin: "5rem",
      display: "flex",
      flexDirection: "column",
      gap: ".52rem"
    }}>

      <ReloadableCaptcha length={6} bgColor="#f4f4f4" fontColor="black" charMap="numbers" />
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter captcha" />
      <button onClick={handleValidation}>Validate</button>
      <p>{result}</p>
    </div>
  );
};

export default App;
