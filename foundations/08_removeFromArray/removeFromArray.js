const removeFromArray = function (sourceArray, ...valueToRemove) {
  return sourceArray.filter((value) => !valueToRemove.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;
