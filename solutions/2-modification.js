// BEGIN
export const swap = (arr) => { //Done
  if (arr.length < 2) {
    return arr;
  }

  const lastIndex = arr.length - 1;
  const tmp = arr[0];
  arr[0] = arr[lastIndex];
  arr[lastIndex] = tmp;

  return arr;
};


//export default swap;

// END
