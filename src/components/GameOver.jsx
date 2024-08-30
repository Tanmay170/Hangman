// src/components/GameOver.js
import React from 'react';

const GameOver = ({ score, onRestart }) => {
  return (
    <div className="mt-6 text-center">
      <h2 className="text-2xl font-bold">Game Over!</h2>
      <p className="mt-4 text-xl">Your final score is {score}</p>
      <button onClick={onRestart} className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Play Again
      </button>
    </div>
  );
};

export default GameOver;
