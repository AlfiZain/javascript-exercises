const palindromes = function (sentence) {
  const sanitized = sentence.toLowerCase().replace(/[^a-z0-9]/g, '');
  return sanitized === sanitized.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
