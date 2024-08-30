// src/components/WordDisplay.js
import React from 'react';

const WordDisplay = ({ word, guessedLetters }) => {
  return (
    <div className="text-3xl font-bold">
      {word.toUpperCase().split('').map((letter, index) => (
        <span key={index} className="mx-2">
          {guessedLetters.includes(letter.toUpperCase()) ? letter : '_'}
        </span>
      ))}
    </div>
  );
};

export default WordDisplay;
