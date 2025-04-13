import { useGame } from '../../context/GameContext';
import './Header.css';

export default function Header() {
  const { score, bestScore, gameStarted, resetGame } = useGame();

  const handleLogoClick = () => {
    if (gameStarted) {
      const confirmReset = window.confirm("Are you sure you want to quit the current game and return to the start screen?");
      if (confirmReset) {
        resetGame();
      }
    }
  };

  return (
    <header className="game-header">
      <div className={`logo ${gameStarted ? 'clickable' : ''}`} onClick={handleLogoClick}>
        <img src="/src/assets/images/logo.png" alt="SpongeBob Memory Game" className="header-logo" />
      </div>
      
      {gameStarted && (
        <div className="score-container">
          <div className="score current-score">
            <div className="score-label">Current Score</div>
            <div className="score-value">{score}</div>
          </div>
          <div className="score best-score">
            <div className="score-label">Best Score</div>
            <div className="score-value">{bestScore}</div>
          </div>
        </div>
      )}
    </header>
  );
}