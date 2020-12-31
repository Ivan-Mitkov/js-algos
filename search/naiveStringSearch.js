const naiveStringSearch = (longString, shortString) => {
  let count = 0;
  for (let m = 0; m < longString.length; m++) {
    for (let i = 0; i < shortString.length; i++) {
      if (shortString[i] !== longString[m + i]) break;
      if (i === shortString.length - 1) count++;
    }
  }
  return count;
};

console.log(naiveStringSearch("lolilol loklololi", "loli"));
