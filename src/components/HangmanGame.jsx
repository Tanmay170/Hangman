import React, { useState, useEffect } from 'react';
import WordDisplay from './WordDisplay';
import Hint from './Hint';
import ScoreCard from './ScoreCard';
import HangmanFigure from './HangmanFigure';
import './HangmanFigure.css';

const words = [
  { word: 'Sorting Hat', hint: 'A magical hat that sorts students into one of the four Hogwarts houses.' },
  { word: 'Golden Snitch', hint: 'A small, winged ball in Quidditch that ends the game when caught.' },
  { word: 'Galleon', hint: 'The main currency in the wizarding world, made of gold.' },
  { word: 'Mirror of Erised', hint: 'A mirror that shows the deepest desires of the viewer\'s heart.' },
  { word: 'Philosophers Stone', hint: 'A legendary stone that grants immortality and turns any metal into gold.' },
  { word: 'Invisibility Cloak', hint: 'A cloak that renders the wearer completely invisible.' },
  { word: 'Chamber of Secrets', hint: 'A hidden chamber within Hogwarts housing a deadly monster.' },
  { word: 'Quidditch', hint: 'A popular magical sport played on broomsticks.' },
  { word: 'Basilisk', hint: 'A giant serpent that can kill with a single glance.' },
  { word: 'Triwizard Tournament', hint: 'A magical competition between three wizarding schools, testing skill, courage, and wit.' },
  { word: 'Death Eaters', hint: 'Followers of Lord Voldemort, committed to dark magic and pure-blood supremacy.' },
  { word: 'Avada Kedavra', hint: 'The Killing Curse, one of the Unforgivable Curses, causing instant death.' },
  { word: 'Moaning Myrtle', hint: 'A ghost who haunts a bathroom at Hogwarts, often crying.' },
  { word: 'Horcrux', hint: 'A dark object containing a fragment of a wizard\'s soul for immortality.' },
  { word: 'Deathly Hallows', hint: 'Three powerful magical objects that together make the possessor the Master of Death.' },
  { word: 'Elder Wand', hint: 'The most powerful wand ever made, one of the Deathly Hallows.' },
  { word: 'Marauders Map', hint: 'A magical map showing every person\'s location within Hogwarts.' },
  { word: 'Voldemort', hint: 'The dark wizard who seeks to conquer the wizarding world and eradicate Muggles.' },
  { word: 'Slytherin', hint: 'One of the four Hogwarts houses, known for ambition, cunning, and resourcefulness.' },
  { word: 'Ravenclaw', hint: 'One of the four Hogwarts houses, valued for intelligence, wisdom, and creativity.' },
  { word: 'Hufflepuff', hint: 'One of the four Hogwarts houses, known for loyalty, patience, and hard work.' },
  { word: 'Gryffindor', hint: 'One of the four Hogwarts houses, celebrated for bravery, courage, and chivalry.' },
  { word: 'Hedwig', hint: 'Harry Potter\'s loyal snowy owl and messenger.' },
  { word: 'Dobby', hint: 'A free house-elf known for his loyalty to Harry Potter.' },
  { word: 'Severus Snape', hint: 'A complex and skilled wizard, known for his mastery of Potions and loyalty to Dumbledore.' },
  { word: 'Hagrid', hint: 'The half-giant Keeper of Keys and Grounds at Hogwarts, with a love for magical creatures.' },
  { word: 'Dumbledore', hint: 'The wise and powerful headmaster of Hogwarts, revered in the wizarding world.' },
  { word: 'Tom Marvolo Riddle', hint: 'The birth name of Lord Voldemort, who turned from a brilliant student to a dark wizard.' },
];

const getRandomWords = () => {
  return [...words].sort(() => 0.5 - Math.random()).slice(0, 5);
};

const HangmanGame = () => {
  const [selectedWords, setSelectedWords] = useState(getRandomWords());
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [score, setScore] = useState(0);
  const [totalTries, setTotalTries] = useState(6);
  const [gameCompleted, setGameCompleted] = useState(false);

  const currentWord = selectedWords[currentWordIndex];
  const hangmanStep = 6 - totalTries;

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

  const handleInputChange = (event) => {
    const guess = event.target.value.toUpperCase();
    if (guess && !guessedLetters.includes(guess) && totalTries > 0 && !gameCompleted) {
      setGuessedLetters(prevLetters => [...prevLetters, guess]);

      if (!currentWord.word.toUpperCase().includes(guess)) {
        setTotalTries(prevTries => prevTries - 1);
      }
    }
    setCurrentGuess(''); // Reset the input field after processing the guess
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
        <input
          type="text"
          value={currentGuess}
          onChange={handleInputChange}
          maxLength="1"
          className="mt-4 p-2 rounded bg-gray-600 text-white text-center w-12"
          autoFocus
        />
      </div>
    </div>
  );
};

export default HangmanGame;
