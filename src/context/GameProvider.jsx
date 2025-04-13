import { useState, useEffect } from "react";
import { characters } from "../data/characters";
import { DIFFICULTY } from "./GameConstants";
import GameContext from "./GameContext";

export function GameProvider({ children }) {
  const [gameStarted, setGameStarted] = useState(false);
  const [difficulty, setDifficulty] = useState(DIFFICULTY.EASY);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [selectedCards, setSelectedCards] = useState([]);
  const [currentCards, setCurrentCards] = useState([]);
  const [gameCharacters, setGameCharacters] = useState([]);
  const [settings, setSettings] = useState({
    backgroundMusic: true,
    soundEffects: true
  });

  const initializeGame = () => {
    const shuffled = [...characters].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, difficulty.count);
    const gameChars = selected;
    
    setGameCharacters(gameChars);
    setScore(0);
    setSelectedCards([]);
    setGameOver(false);
    setGameWon(false);
    setGameStarted(true);
    
    generateInitialCards(gameChars);
  };
  
  const generateInitialCards = (chars) => {
    if (!chars || chars.length === 0) return;
    
    const numberOfCards = difficulty.cardsShown;
    const availableCount = Math.min(numberOfCards, chars.length);
    
    const shuffled = [...chars].sort(() => 0.5 - Math.random());
    const cardsToShow = shuffled.slice(0, availableCount);
    
    setCurrentCards(cardsToShow);
  };

  const getRandomCards = () => {
    if (!gameCharacters || gameCharacters.length === 0) return;
    
    const numberOfCards = difficulty.cardsShown;
    const selectedCharacterIds = selectedCards;
    
    const availableCharacters = gameCharacters.filter(char => 
      !selectedCharacterIds.includes(char.id)
    );
    
    if (availableCharacters.length === 0) {
      setGameWon(true);
      return;
    }
    
    const cardsToShow = [];
    
    if (availableCharacters.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableCharacters.length);
      cardsToShow.push(availableCharacters[randomIndex]);
    }
    
    const remainingNeeded = numberOfCards - cardsToShow.length;
    
    if (remainingNeeded > 0) {
      const usedIds = cardsToShow.map(card => card.id);
      const remainingPool = gameCharacters.filter(char => !usedIds.includes(char.id));
      
      const shuffled = [...remainingPool].sort(() => 0.5 - Math.random());
      
      for (let i = 0; i < Math.min(remainingNeeded, shuffled.length); i++) {
        cardsToShow.push(shuffled[i]);
      }
    }
    
    const finalCards = [...cardsToShow].sort(() => 0.5 - Math.random());
    setCurrentCards(finalCards);
  };

  const selectCard = (cardId) => {
    if (selectedCards.includes(cardId)) {
      setGameOver(true);
      return;
    }

    const newSelectedCards = [...selectedCards, cardId];
    setSelectedCards(newSelectedCards);
    const newScore = score + 1;
    setScore(newScore);
    
    if (newScore > bestScore) {
      setBestScore(newScore);
    }
    
    if (newSelectedCards.length === gameCharacters.length) {
      setGameWon(true);
      return;
    }
    
    getRandomCards();
  };

  const resetGame = () => {
    setGameStarted(false);
    setGameOver(false);
    setGameWon(false);
    setScore(0);
    setSelectedCards([]);
  };

  const toggleSetting = (setting) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const changeDifficulty = (newDifficulty) => {
    setDifficulty(newDifficulty);
  };

  useEffect(() => {
    const savedBestScore = localStorage.getItem('bestScore');
    if (savedBestScore) {
      setBestScore(parseInt(savedBestScore, 10));
    }
  }, []);

  useEffect(() => {
    if (bestScore > 0) {
      localStorage.setItem('bestScore', bestScore.toString());
    }
  }, [bestScore]);

  return (
    <GameContext.Provider
      value={{
        gameStarted,
        difficulty,
        score,
        bestScore,
        gameOver,
        gameWon,
        selectedCards,
        currentCards,
        gameCharacters,
        settings,
        initializeGame,
        selectCard,
        resetGame,
        toggleSetting,
        changeDifficulty
      }}
    >
      {children}
    </GameContext.Provider>
  );
}