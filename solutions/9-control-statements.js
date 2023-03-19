// BEGIN
const getTotalAmount = (money, value) => {//Done
    let sum = 0;
    for (let item of money) {
      const [val, amount] = item.split(' ');
      if (val==value){
        sum+=Number(amount);
      }
    }
    return sum;
  };
  
  
  export default getTotalAmount;
// END