import React from 'react';

const HangmanFigure = ({ step }) => {
  return (
    <div className="hangman-figure">
      {step > 0 && <div className="head bg-gray-200"></div>}
      {step > 1 && <div className="body bg-gray-200"></div>}
      {step > 2 && <div className="left-arm bg-gray-200"></div>}
      {step > 3 && <div className="right-arm bg-gray-200"></div>}
      {step > 4 && <div className="left-leg bg-gray-200"></div>}
      {step > 5 && <div className="right-leg bg-gray-200"></div>}
    </div>
  );
};

export default HangmanFigure;
