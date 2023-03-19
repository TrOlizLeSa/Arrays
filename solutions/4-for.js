// BEGIN
//const addPrefix = (arr, prefix) => arr.map((item) => `${prefix} ${item}`);

export const addPrefix = (arr, prefix) => { //Done
//const names = ['john', 'smith', 'karl'];
var newarr = [];
    for (let i=0; i <= arr.length - 1;i++){
        newarr[i]=(`${prefix} ${arr[i]}`);
    }
    return newarr;
}

export default addPrefix;
// END