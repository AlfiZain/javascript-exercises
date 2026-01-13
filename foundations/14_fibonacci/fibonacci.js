const fibonacci = function (number) {
  const parseNumber = parseInt(number);
  if (parseNumber < 0 || Number.isNaN(parseNumber)) return 'OOPS';

  let a = 0;
  let b = 1;

  for (let i = 0; i < number; i++) {
    [a, b] = [b, a + b];
  }

  return a;
};

// Do not edit below this line
module.exports = fibonacci;
