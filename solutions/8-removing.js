// BEGIN
export const getSameParity = (arr) =>{
    let somearr=[];
    if (arr.length == 0){
        return arr;
    }
    for (let item of arr){
        if (Math.abs(arr[0])%2==0){
            if(Math.abs(item)%2==0){
                somearr.push(item);
            }
        }
        else{
            if(Math.abs(item)%2!==0){
                somearr.push(item);
        }
        }
    }
    return somearr;
    
    }
export default getSameParity;
// END*/