// BEGIN
export const reverse = (names) => { //Done

    const lastIndex = names.length - 1;
    let temp;
    for (let i = 0; i < names.length /2; i++) {
      temp = names[i];
      names[i] = names[lastIndex - i];
      names[lastIndex - i] = temp
    }
  };
  
  

  export default reverse;
// END