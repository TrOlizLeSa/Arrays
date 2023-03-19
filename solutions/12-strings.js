export const makeCensored = (text, stopWords) => //Done
  text
    .split(' ')
    .map(word => (stopWords.includes(word) ? '$#%!' : word))
    .join(' ');
    
export default makeCensored;
// END