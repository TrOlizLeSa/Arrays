export const getMax = (arr) => {//Done
  if (arr.length === 0) return null;

  let [max, ...rest] = arr;
  for (const num of rest) {
    if (num > max) {
      max = num;
    }
  }
  return max;
};
