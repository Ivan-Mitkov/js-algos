const isOdd = (val) => val % 2 !== 0;
let print = (val) => console.log(val);
//accept array and callback
//return true if a single value in the array return true, when passed to the callback,
//otherwise retutn false
const someRecursive = (arr, callBack) => {
  if (arr.length === 0) return false;

  if (callBack(arr[arr.length - 1]) === true) {
    return true;
  } else {
    return someRecursive(arr.slice(0, arr.length - 1), callBack);
  }
};

console.log(someRecursive([1, 2, 3, 4], isOdd));
console.log(someRecursive([4, 6, 8, 9], isOdd));
console.log(someRecursive([4, 6, 8], isOdd));
console.log(someRecursive([4, 6, 8], (val) => val > 10));
