import Operate from './Operate';

const Calculate = (data, buttonName) => {
  const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const ops = ['X', '-', '+', '÷'];
  let { total, next, operation } = data;
  if (buttonName === '+/-') {
    total *= (-1);
    next *= (-1);
  } else if (buttonName === '=' || buttonName === '%' || (ops.includes(buttonName) && next && operation)) {
    const newData = {
      total: parseFloat(total),
      next: parseFloat(next),
      operation,
    };
    total = Operate(newData.total, newData.next, operation).toString();
    next = null;
    operation = buttonName;
  } else if (buttonName === 'AC') {
    total = null;
    next = null;
  } else if (buttonName === '.') {
    if (!next && !total) { total = '0.'; next = '0.'; } else if (!next && operation) {
      next = '0.';
    } else if (operation && total && next) {
      next += buttonName;
    } else {
      next += '.';
      total += '.';
    }
  } else if (nums.includes(buttonName)) {
    if (!next && total) { next = buttonName; } else if (next && total && !operation) {
      total += buttonName;
      next += buttonName;
    } else if (next && operation) {
      next += buttonName;
    }
  }
  return {
    total,
    next,
    operation,
  };
};


export default Calculate;
