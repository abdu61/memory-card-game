import { useState, useEffect } from 'react';
import './Card.css';

export default function Card({ character, onSelect, isFlipping }) {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setIsFlipped(isFlipping);
  }, [isFlipping]);

  const handleClick = () => {
    setTimeout(() => {
      onSelect(character.id);
    }, 500);
  };

  return (
    <div className={`card-container ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="card">
        <div className="card-front">
          <img src={character.image || '/placeholder.png'} alt={character.name} />
          <h3>{character.name}</h3>
        </div>
        <div className="card-back">
          <img src="/images/logo.png" alt="Card Back" />
        </div>
      </div>
    </div>
  );
}