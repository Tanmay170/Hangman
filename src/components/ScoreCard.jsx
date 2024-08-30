// src/components/ScoreCard.js
import React from 'react';

const ScoreCard = ({ score }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
      <div className="p-8 bg-gray-700 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold">Game Over</h2>
        <p className="text-xl mt-4">Your Score: {score}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default ScoreCard;
