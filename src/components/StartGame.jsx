// src/components/StartGame.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const StartGame = () => {
  const navigate = useNavigate();

  const startGame = () => {
    navigate('/hangman'); // Navigate to the Hangman game when the button is clicked
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800 text-white">
      <button onClick={startGame} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Start a New Game
      </button>
    </div>
  );
};

export default StartGame;
