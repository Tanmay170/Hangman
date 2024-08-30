import React, { useState, useEffect, useRef } from 'react';
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
  { word: 'Philosopher\'s Stone', hint: 'A legendary stone that grants immortality and turns any metal into gold.' },
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
  { word: 'Marauder\'s Map', hint: 'A magical map showing every person\'s location within Hogwarts.' },
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
  const [score, setScore] = useState(0);
  const [totalTries, setTotalTries] = useState(6);
  const [gameCompleted, setGameCompleted] = useState(false);

  const inputRef = useRef(null);

  const currentWord = selectedWords[currentWordIndex];
  const hangmanStep = 6 - totalTries;

  useEffect(() => {
    const handleKeyPress = (event) => {
      const letter = event.key.toUpperCase();
      if (letter.match(/^[A-Z]$/) && !guessedLetters.includes(letter) && totalTries > 0 && !gameCompleted) {
        setGuessedLetters([...guessedLetters, letter]);

        if (!currentWord.word.toUpperCase().includes(letter)) {
          setTotalTries(totalTries - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    inputRef.current.focus();

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [guessedLetters, totalTries, currentWord, gameCompleted]);

  useEffect(() => {
    const allLettersGuessed = currentWord.word.toUpperCase().split('').every(letter => guessedLetters.includes(letter.toUpperCase()) || letter === ' ');

    if (allLettersGuessed && !gameCompleted) {
      // Increment the score only once
      setScore(prevScore => prevScore + 1);

      if (currentWordIndex < selectedWords.length - 1) {
        // Move to the next word after a short delay
        setTimeout(() => {
          setCurrentWordIndex(currentWordIndex + 1);
          setGuessedLetters([]);
        }, 1000);
      } else {
        // No more words left, end the game
        setTimeout(() => {
          setGameCompleted(true);
        }, 1000);
      }
    }
  }, [guessedLetters, currentWord, currentWordIndex, selectedWords.length, gameCompleted]);

  useEffect(() => {
    if (totalTries <= 0) {
      // Game over, no more tries left
      setGameCompleted(true);
    }
  }, [totalTries]);

  if (gameCompleted) {
    return <ScoreCard score={score} />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
      <input
        ref={inputRef}
        type="text"
        className="absolute opacity-0"
        autoComplete="off"
      />

      <div className="mb-4 text-lg text-center">
        <p className="text-xl font-bold">Score: {score}</p>
        <p className="text-xl font-bold">Remaining Tries: {totalTries}</p>
      </div>
      <div className="p-6 bg-gray-700 rounded-lg shadow-lg text-center">
        <HangmanFigure step={hangmanStep} />
        <Hint hint={currentWord.hint} />
        <WordDisplay word={currentWord.word} guessedLetters={guessedLetters} />
      </div>
    </div>
  );
};

export default HangmanGame;
