export const flatten = (arr) => { //Done
  let result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...item);
    } else {
      result.push(item);
    }
  }
  return result;
};

// END