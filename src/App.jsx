import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartGame from './components/StartGame';
import HangmanGame from './components/HangmanGame';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartGame />} />
        <Route path="/hangman" element={<HangmanGame />} />
      </Routes>
    </Router>
  );
};

export default App;
