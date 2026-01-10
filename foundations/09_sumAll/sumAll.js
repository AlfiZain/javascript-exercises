const sumAll = function (min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return 'ERROR';
  if (min < 0 || max < 0) return 'ERROR';
  if (min > max) [max, min] = [min, max];

  let total = 0;
  for (min; min <= max; min++) {
    total += min;
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
