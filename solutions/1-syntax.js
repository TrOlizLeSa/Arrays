// BEGIN (write your solution here)
export const getWeekends = (format) => { //Done
    const longFormat = ['saturday', 'sunday'];
    const shortFormat = ['sat', 'sun'];


    switch (format) {
      case 'long':
        return longFormat;
      case 'short':
        return shortFormat;
      default:
        return longFormat;
    }
  };
  
// END
