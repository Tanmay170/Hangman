import React from 'react';
import { useNavigate } from 'react-router-dom';

const ScoreCard = ({ score }) => {
  const navigate = useNavigate();

  const handleRestart = () => {
    navigate('/start');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Game Over</h1>
        <p className="mt-4 text-2xl">Your Score: {score}</p>
        <button
          onClick={handleRestart}
          className="mt-8 px-6 py-3 bg-green-600 text-white font-bold rounded hover:bg-green-700"
        >
          Start a New Game
        </button>
      </div>
    </div>
  );
};

export default ScoreCard;
