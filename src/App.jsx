import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScoreCard from './components/ScoreCard';
import HangmanGame from './components/HangmanGame';
import StartPage from './components/StartPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/game" element={<HangmanGame />} />
        <Route path="/score" element={<ScoreCard />} />
      </Routes>
    </Router>
  );
}

export default App;
