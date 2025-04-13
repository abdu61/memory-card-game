import { useState } from 'react';
import './HelpPanel.css';

export default function HelpPanel() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className={`help-panel ${isOpen ? 'open' : ''}`}>
      <button className="help-toggle" onClick={togglePanel}>
        {isOpen ? '✕' : '?'}
      </button>
      
      {isOpen && (
        <div className="help-content">
          <h3>How to Play</h3>
          
          <div className="instructions">
            <p>Click on a character card, but don't click on the same character twice!</p>
            <p>After each selection, the cards will shuffle and present new characters.</p>
            <p>Try to remember which ones you've already clicked!</p>
            <p>Your score increases with each unique character you select.</p>
            <p>If you select all characters without repeating any, you win the game!</p>
          </div>
        </div>
      )}
    </div>
  );
}
