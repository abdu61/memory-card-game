export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const getRandomSubset = (array, count) => {
  if (count >= array.length) return [...array];
  return shuffleArray(array).slice(0, count);
};

export const formatScore = (score, digits = 3) => {
  return score.toString().padStart(digits, '0');
};