import { createContext, useContext } from "react";

// Create a context that can be used outside this file
const GameContext = createContext();

// Export the useGame hook
export const useGame = () => useContext(GameContext);

// Export the context for the provider file
export default GameContext;