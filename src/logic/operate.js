const Big = require('big.js');

const operate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return Big(num1).plus(Big(num2));
    case '-':
      return Big(num1).minus(Big(num2));
    case '×':
      return Big(num1).mul(Big(num2));
    case '%':
      return Big(num1).mod(Big(num2));
    default:
      return Big(num1).div(Big(num2));
  }
};

export default operate;
