const calculate = (data, name) => {
  let { total, next } = data;
  const { operation } = data;
  if (name === '+/-') {
    total *= (-1);
    next *= (-1);
  }
  return {
    total,
    next,
    operation,
  };
};


export default calculate;
