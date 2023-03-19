// BEGIN

export const calculateAverage = (arr) =>{ //Done
    let s = 0;
    let a = 0;
    if (arr.length === 0){
        return null;
    }
    for (let i = 0; i < arr.length; i++){
            a= a + 1;
            s+=arr[i]; 
    }
    s = s/a;
    return s;
    }
    
export default calculateAverage;
// END