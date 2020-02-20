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
  } else if ((buttonName === '=' && operation) || (ops.includes(buttonName) && next && operation)) {
    const newData = {
      total: parseFloat(total),
      next: parseFloat(next),
      operation,
    };
    total = Operate(newData.total, newData.next, operation).toFixed(2).toString();
    next = null;
    result = total;
    operation = buttonName;
  } else if (buttonName === 'AC') {
    total = null;
    next = null;
    result = null;
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
    } else if (!next && operation) {
      next = buttonName;
    } else if (!next && !total) {
      next = buttonName;
      total = buttonName;
    } else if (next && operation) {
      next += buttonName;
    }
  } else if (ops.includes(buttonName)) {
    if (!operation && total) { next = null; operation = buttonName; }
  } else if (buttonName === '%') {
    if (total && next && !operation) {
      total = Operate(next, total, buttonName).toString(); 
      result = total;
    } else if (total && next && operation) {
      next = Operate(next, total, buttonName).toString();
    }
  }
  return {
    total,
    next,
    operation,
    result,
  };
};


export default Calculate;
