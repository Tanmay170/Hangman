import React, { useState, useEffect } from 'react';
import WordDisplay from './WordDisplay';
import Hint from './Hint';
import ScoreCard from './ScoreCard';
import HangmanFigure from './HangmanFigure';
import './HangmanFigure.css';

const words = [
  // Include the list of words and hints as provided earlier
];

const getRandomWords = () => {
  return [...words].sort(() => 0.5 - Math.random()).slice(0, 5);
};

const HangmanGame = () => {
  const [selectedWords, setSelectedWords] = useState(getRandomWords());
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [score, setScore] = useState(0);
  const [totalTries, setTotalTries] = useState(6);
  const [gameCompleted, setGameCompleted] = useState(false);

  const currentWord = selectedWords[currentWordIndex];
  const hangmanStep = 6 - totalTries;

  useEffect(() => {
    const handleKeyPress = (event) => {
      const letter = event.key.toUpperCase();
      if (letter.match(/^[A-Z]$/) && !guessedLetters.includes(letter) && totalTries > 0 && !gameCompleted) {
        setGuessedLetters(prevLetters => [...prevLetters, letter]);

        if (!currentWord.word.toUpperCase().includes(letter)) {
          setTotalTries(prevTries => prevTries - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [guessedLetters, totalTries, currentWord, gameCompleted]);

  useEffect(() => {
    const allLettersGuessed = currentWord.word.toUpperCase().split('').every(letter => guessedLetters.includes(letter.toUpperCase()) || letter === ' ');

    if (allLettersGuessed && !gameCompleted) {
      setScore(prevScore => prevScore + 1);

      if (currentWordIndex < selectedWords.length - 1) {
        setTimeout(() => {
          setCurrentWordIndex(prevIndex => prevIndex + 1);
          setGuessedLetters([]);
        }, 1000);
      } else {
        setTimeout(() => {
          setGameCompleted(true);
        }, 1000);
      }
    }
  }, [guessedLetters, currentWord, currentWordIndex, selectedWords.length, gameCompleted]);

  useEffect(() => {
    if (totalTries <= 0) {
      setGameCompleted(true);
    }
  }, [totalTries]);

  const handleKeyboardClick = (letter) => {
    if (!guessedLetters.includes(letter) && totalTries > 0 && !gameCompleted) {
      setGuessedLetters(prevLetters => [...prevLetters, letter]);

      if (!currentWord.word.toUpperCase().includes(letter)) {
        setTotalTries(prevTries => prevTries - 1);
      }
    }
  };

  const renderKeyboard = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    return (
      <div className="flex flex-wrap justify-center mt-4">
        {alphabet.map(letter => (
          <button
            key={letter}
            className="m-1 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => handleKeyboardClick(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
    );
  };

  if (gameCompleted) {
    return <ScoreCard score={score} />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white p-4">
      <div className="mb-4 text-lg text-center">
        <p className="text-xl font-bold">Score: {score}</p>
        <p className="text-xl font-bold">Remaining Tries: {totalTries}</p>
      </div>
      <div className="p-4 bg-gray-700 rounded-lg shadow-lg text-center w-full max-w-md">
        <HangmanFigure step={hangmanStep} />
        <Hint hint={currentWord.hint} />
        <WordDisplay word={currentWord.word} guessedLetters={guessedLetters} />
        {renderKeyboard()}
      </div>
    </div>
  );
};

export default HangmanGame;
