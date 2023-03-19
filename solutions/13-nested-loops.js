const _ = require("lodash"); //Done

// BEGIN
export const getSameCount = (arr1, arr2) => {
let was = [];
let answer = 0;

    function notItem(a, arr) {
        for (let item of arr) {
            if (a == item) {
                return false;
            }
        }

    arr.push(a);
    return true;
  }

    for (let item1 of arr1) {
        if (notItem(item1, was)) {
            for (let item2 of arr2) {
                if (item1 == item2) {
                    answer+=1;
                    break;
                }
            }
        }
    }
return answer;
}
export default getSameCount;
// END