const areThereDuplicates = (...args) => {
  const fArguments = [...args];

  const dictSet = {};
  for (const item of fArguments) {
    if (!dictSet[item]) {
      dictSet[item] = 1;
    } else {
      dictSet[item] += 1;
    }
  }
  for (const item in dictSet) {
    if (dictSet[item] !== 1) {
      return true;
    }
  }

  return false;
};

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates("a", "b", "c", "a"));
