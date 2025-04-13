import { useGame } from '../../context/GameContext';
import './GameModal.css';

export default function GameModal() {
  const { gameOver, gameWon, score, bestScore, resetGame } = useGame();

  if (!gameOver && !gameWon) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className={`game-modal ${gameWon ? 'win' : 'lose'}`}>
        <h2 className="modal-title">
          {gameWon ? 'Congratulations!' : 'Game Over!'}
        </h2>
        
        <div className="modal-content">
          {gameWon ? (
            <p>You have an amazing memory! You remembered all the characters!</p>
          ) : (
            <p>Oops! You clicked on a character you've already selected.</p>
          )}
          
          <div className="modal-scores">
            <div className="modal-score">
              <span>Your Score:</span>
              <span className="score-value">{score}</span>
            </div>
            <div className="modal-score">
              <span>Best Score:</span>
              <span className="score-value">{bestScore}</span>
            </div>
          </div>
        </div>
        
        <div className="modal-actions">
          <button className="modal-button play-again" onClick={resetGame}>
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
}