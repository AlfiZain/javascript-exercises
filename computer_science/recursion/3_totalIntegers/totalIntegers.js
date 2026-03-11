const isObject = (value) => typeof value === 'object' && value !== null;

const totalIntegers = function (values) {
  if (!isObject(values)) return;

  return Object.values(values).reduce((acc, cur) => {
    if (Number.isInteger(cur)) return acc + 1;
    if (isObject(cur)) return acc + totalIntegers(cur);
    return acc;
  }, 0);
};

// Do not edit below this line
module.exports = totalIntegers;
