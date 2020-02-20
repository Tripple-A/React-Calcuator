const Big = require('big.js');

const Operate = (num1, num2, operator) => {
  if (operator === '+') { return Big(num1).plus(Big(num2)); }

  if (operator === '-') { return Big(num1).minus(Big(num2)); }

  if (operator === '÷') { return num2 === 0 ? 0 : Big(num1).div(Big(num2)); }

  if (operator === '%') { return Big(num1).div(Big(100)); }

  if (operator === 'X') { return Big(num1).mul(Big(num2)); }
  return null;
};


export default Operate;
