// src/components/HangmanFigure.js
import React from 'react';

const HangmanFigure = ({ step }) => {
  return (
    <div className="hangman-figure">
      {step === 0 && <div className="head"></div>}
      {step >= 1 && <div className="head"></div>}
      {step >= 2 && <div className="body"></div>}
      {step >= 3 && <div className="left-arm"></div>}
      {step >= 4 && <div className="right-arm"></div>}
      {step >= 5 && <div className="left-leg"></div>}
      {step >= 6 && <div className="right-leg"></div>}
      {/* Add CSS for hangman steps */}
    </div>
  );
};

export default HangmanFigure;
