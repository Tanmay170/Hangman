import React from 'react';
import { useNavigate } from 'react-router-dom';

const GameOverPage = ({ score }) => {
  const navigate = useNavigate();

  const handleRestart = () => {
    navigate('/'); // Navigate back to the game start or home page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-600 text-white">
      <h1 className="text-5xl font-bold mb-8">Game Over</h1>
      <p className="text-2xl mb-4">Final Score: {score}</p>
      <button
        onClick={handleRestart}
        className="mt-4 p-4 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600"
      >
        Start a New Game
      </button>
    </div>
  );
};

export default GameOverPage;
