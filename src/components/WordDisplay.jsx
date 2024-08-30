import React from 'react';

const WordDisplay = ({ word, guessedLetters }) => {
  return (
    <div className="text-3xl font-bold tracking-wide">
      {word.split('').map((letter, index) => (
        <span key={index} className="mx-1">
          {letter === ' ' ? ' ' : guessedLetters.includes(letter.toUpperCase()) ? letter : '_'}
        </span>
      ))}
    </div>
  );
};

export default WordDisplay;
