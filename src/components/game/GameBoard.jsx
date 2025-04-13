import { useState, useEffect } from 'react';
import Card from '../game/Card';
import { useGame } from '../../context/GameContext';
import './GameBoard.css';

export default function GameBoard() {
  const { currentCards, selectCard, gameStarted } = useGame();
  const [isFlipping, setIsFlipping] = useState(false);
  const [displayedCards, setDisplayedCards] = useState([]);

  useEffect(() => {
    if (currentCards.length > 0) {
      if (displayedCards.length > 0) {
        setIsFlipping(true);
        
        setTimeout(() => {
          setDisplayedCards(currentCards);
          
          setTimeout(() => {
            setIsFlipping(false);
          }, 600);
        }, 600);
      } else {
        setDisplayedCards(currentCards);
        setIsFlipping(false);
      }
    }
  }, [currentCards, displayedCards.length]);

  if (!gameStarted || displayedCards.length === 0) {
    return null;
  }

  return (
    <div className="game-board">
      {displayedCards.map((character) => (
        <Card 
          key={character.id} 
          character={character} 
          onSelect={selectCard}
          isFlipping={isFlipping}
        />
      ))}
    </div>
  );
}