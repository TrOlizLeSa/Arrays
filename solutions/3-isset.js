// BEGIN
const cities = ['moscow', 'london', 'berlin', 'porto', '', null, undefined]; //Done
export const get = (arr, index, defaultValue = null) => {
    if (index >= 0 && index < arr.length) {
      return arr[index];
    }
    return defaultValue;
  };
  
export default get;
// END
