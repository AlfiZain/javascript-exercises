const pascal = function (row) {
  if (row === 1) return [1];

  const previousRow = pascal(row - 1);
  const currentRow = [];

  previousRow.unshift(0);
  previousRow.push(0);

  for (let i = 0; i < previousRow.length - 1; i++) {
    currentRow.push(previousRow[i] + previousRow[i + 1]);
  }

  return currentRow;
};

// Do not edit below this line
module.exports = pascal;
