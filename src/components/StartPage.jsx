import React from 'react';
import { useNavigate } from 'react-router-dom';

const StartPage = () => {
  const navigate = useNavigate();

  const startGame = () => {
    navigate('/game');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
          <div className="text-center space-y-6">
          <h1 className="text-4xl text-cyan-300 font-bold mb-4">Welcome to the Harry Potter Hangman</h1>
          <div className="bg-gray-900 p-6 rounded-lg shadow-md text-left">
            <h2 className="text-2xl font-semibold mb-4">Rules :</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>There will be a hint for every word.</li>
              <li>You have to guess the word, and one point is awarded for every correct guess.</li>
              <li>Each part of Hangman reflects a mistake.</li>
              <li>Six tries will be given that show each part of hangman.</li>
            </ul>
          </div>
      <button
        onClick={startGame}
        className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-6 rounded-lg transition-all"
      >
        Start Game
      </button>
      </div>
    </div>
  );
};

export default StartPage;
