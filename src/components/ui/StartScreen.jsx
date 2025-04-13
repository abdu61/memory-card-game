import { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { DIFFICULTY } from '../../context/GameConstants';
import './StartScreen.css';

export default function StartScreen() {
  const { changeDifficulty, initializeGame } = useGame();
  const [selectedDifficulty, setSelectedDifficulty] = useState(DIFFICULTY.EASY);

  const handleDifficultyChange = (difficulty) => {
    setSelectedDifficulty(difficulty);
    changeDifficulty(difficulty);
  };

  const handleStartGame = () => {
    initializeGame();
  };

  return (
    <div className="start-screen">
      <div className="start-content">
        <div className="logo-container">
          <img src="/src/assets/images/logo.png" alt="SpongeBob Logo" className="game-logo" />
        </div>
        <h2 className="game-subtitle">Memory Game</h2>
        
        <div className="difficulty-section">
          <h3>Select Difficulty</h3>
          <div className="difficulty-options">
            {Object.values(DIFFICULTY).map((difficulty) => (
              <button
                key={difficulty.name}
                className={`difficulty-button ${selectedDifficulty.name === difficulty.name ? 'selected' : ''}`}
                onClick={() => handleDifficultyChange(difficulty)}
              >
                {difficulty.name}
                <span className="difficulty-info">
                  {difficulty.count} characters, {difficulty.cardsShown} cards
                </span>
              </button>
            ))}
          </div>
        </div>
        
        <button className="start-button" onClick={handleStartGame}>
          Start Game
        </button>
      </div>
    </div>
  );
}