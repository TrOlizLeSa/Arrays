// BEGIN
const countUniqChars = (string) => { //Done
    const uniqChars = new Set();
    for (const symbol of string) {
      uniqChars.add(symbol);
    }
    return uniqChars.size;
  };

  export default countUniqChars;
// END