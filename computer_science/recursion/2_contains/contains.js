const contains = function (source, targetValue) {
  if (source === targetValue) return true;
  if (Number.isNaN(targetValue) && Number.isNaN(source)) return true;
  if (typeof source === 'object' && source !== null) {
    for (const value of Object.values(source)) {
      if (contains(value, targetValue)) return true;
    }
  }
  return false;
};

// Do not edit below this line
module.exports = contains;
