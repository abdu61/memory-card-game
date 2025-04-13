import { GameProvider } from './context/GameProvider';
import GamePage from './pages/GamePage';
import './App.css';

function App() {
  return (
    <GameProvider>
      <GamePage />
    </GameProvider>
  );
}

export default App;
