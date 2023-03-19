// BEGIN
export const calculateSum = (arr) =>{ //Done
    let temp;
    temp = 0;
    if (arr.length == 0){
        return temp;
    }
    for (let item of arr)
        if (item %3 == 0){
            temp+=item;
        }
    return temp;
}

export default calculateSum;
// END