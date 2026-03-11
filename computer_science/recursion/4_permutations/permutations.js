const permutations = function (source) {
  if (source.length === 0) return [[]];

  return source.flatMap((value) =>
    permutations(source.filter((s) => s !== value)).map((perm) => [
      value,
      ...perm,
    ]),
  );
};

// Do not edit below this line
module.exports = permutations;
