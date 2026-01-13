const add = function (number1, number2) {
  return number1 + number2;
};

const subtract = function (number1, number2) {
  return number1 - number2;
};

const sum = function (numberArr) {
  return numberArr.reduce((total, number) => (total += number), 0);
};

const multiply = function (numberArr) {
  return numberArr.reduce((total, number) => (total *= number));
};

const power = function (base, exponent) {
  let result = 1;
  for (let i = 1; i <= exponent; i++) {
    result *= base;
  }
  return result;
};

const factorial = function (number) {
  let result = 1;
  for (; number >= 1; number--) {
    result *= number;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
