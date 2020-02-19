import Operate from './Operate';

const Calculate = (data, name) => {
  let { total, next } = data;
  const { operation } = data;
  if (name === '+/-') {
    total *= (-1);
    next *= (-1);
  }
  const newData = {
    total: parseFloat(total),
    next: parseFloat(next),
    operation,
  };
  Operate(newData.total, newData.next, operation);
};


export default Calculate;
