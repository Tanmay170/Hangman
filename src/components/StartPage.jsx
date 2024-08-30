import React from 'react';
import { useNavigate } from 'react-router-dom';

const StartPage = () => {
  const navigate = useNavigate();

  const startGame = () => {
    navigate('/game');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
      <h1 className="text-4xl m-2 font-bold">Hangman Game</h1>
      <button
        onClick={startGame}
        className="mt-8 px-6 py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700"
      >
        Start Game
      </button>
    </div>
  );
};

export default StartPage;
