import Operate from './Operate';

const Calculate = (data, buttonName) => {
  const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const ops = ['X', '-', '+', '÷'];
  let {
    total, next, operation, result,
  } = data;
  if (buttonName === '+/-') {
    total *= (-1);
    next *= (-1);
    result = total.toString();
  } else if ((buttonName === '=' && operation) || buttonName === '%' || (ops.includes(buttonName) && next && operation)) {
    if (buttonName === '%') { operation = buttonName; }
    const newData = {
      total: parseFloat(total),
      next: parseFloat(next),
      operation,
    };
    total = Operate(newData.total, newData.next, operation).toFixed(2).toString();
    next = null;
    operation = null;
    result = total;
  } else if (buttonName === 'AC') {
    total = null;
    next = null;
  } else if (buttonName === '.') {
    if (!next && !total) { total = '0.'; next = '0.'; } else if (!next && operation) {
      next = '0.';
    } else if (operation && total && next) {
      next += buttonName;
    } else if (!total.includes('.') && !next.includes('.')) {
      next += '.';
      total += '.';
    }
  } else if (nums.includes(buttonName)) {
    if (!next && total) { next = buttonName; } else if (next && total && !operation) {
      total += buttonName;
      next += buttonName;
    } else if (next && operation) {
      next += buttonName;
    } else if (!next && !total) {
      next = buttonName;
      total = buttonName;
    }
  } else if (ops.includes(buttonName)) {
    if (!operation && total) { next = null; operation = buttonName; }
  }
  return {
    total,
    next,
    operation,
    result,
  };
};


export default Calculate;
