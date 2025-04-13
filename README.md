# SpongeBob Memory Card Game

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Site-blue?style=for-the-badge)](https://memory-card-game-evl.pages.dev/)

A fun and interactive memory card game featuring characters from SpongeBob SquarePants. Test your memory by finding matching cards!

## 🎮 Game Features

- Three difficulty levels: Easy, Medium, and Hard
- Character cards from the SpongeBob universe
- Score tracking and best score memory
- Responsive design for mobile and desktop
- Animated card flips and transitions
- Game state persistence

## 🛠️ Technologies Used

- **React** - UI library
- **Vite** - Build tool
- **CSS3** - Styling with custom animations
- **React Context API** - State management
- **vite-plugin-image-optimizer** - Image optimization

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or newer)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/abdu61/memory-card-game.git
cd memory-card
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## 📝 How to Play

1. Select a difficulty level on the start screen
2. Click on a card to flip it
3. Try to remember the location of each character
4. Match all pairs to win the game
5. Try to achieve the highest score by making fewer matching attempts

## 📋 Project Structure

```
memory-card/
├── public/         # Static assets and images
├── src/
│   ├── assets/     # App assets
│   ├── components/ # UI components
│   ├── context/    # Game state management
│   ├── data/       # Character data
│   ├── pages/      # Game pages
│   └── utils/      # Utility functions
└── vite.config.js  # Vite configuration
```

## 🔧 Future Improvements

- Add sound effects
- Add a timer mode
- Implement additional themes
- Add multiplayer functionality

## 📄 License

[MIT](LICENSE)

## 🙏 Acknowledgements

- SpongeBob character images and concept
- React and Vite communities
