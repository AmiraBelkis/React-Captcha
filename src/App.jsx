import React, { useState } from 'react';
import { validateCaptcha } from './engine/captchaEngine';
import ReloadableCaptcha from './components/ReloadableCaptcha';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleValidation = () => {
    const isValid = validateCaptcha(input, () => window.location.reload());
    setResult(isValid ? 'Valid' : 'Invalid');
  };

  return (
    <div style={{
      margin: "5rem",
      display: "flex",
      flexDirection: "column",
      gap: ".52rem"
    }}>
      <ReloadableCaptcha length={5} bgColor="lightgray" fontColor="black" charMap="numbers" />
      <input onChange={(e) => setInput(e.target.value)} placeholder="Enter captcha" />
      <button onClick={handleValidation}>Validate</button>
      <p>{result}</p>
    </div>
  );
};

export default App;
