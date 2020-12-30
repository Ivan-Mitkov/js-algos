const isPalindrome = (str) => {
  const isEqual = (str, start) => {
    if (str.length === 1) return true;
    if (str[0] === str[str.length - 1]) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isEqual(str.substring(start + 1, str.length - 1));
  };
  return isEqual(str, 1);
};

console.log(isPalindrome("tacocat", 1));
console.log(isPalindrome("awesome", 1));
