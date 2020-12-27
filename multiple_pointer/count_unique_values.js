//accepts sorted array return number of unique values

const countUniqueValues = (arr) => {
  let uniqueSet = new Set();
  let uniqueValues = 0;
  let first = 0,
    second = 1;
  for (const item of arr) {
    uniqueSet.add(item);
  }
  while (first < arr.length) {
    if (arr[first] !== arr[second]) {
      uniqueValues++;
      first++;
      second++;
    } else {
      first++;
      second++;
    }
  }

  return [uniqueSet.size, uniqueValues];
};

const arr1 = [1, 1, 1, 1, 1, 2];
const arr2 = [1, 2, 3, 4, 4, 4, 4, 7, 7, 12, 12, 13, 13];
const arr3 = [];
const arr4 = [-2, -1, -1, 0, 1];

console.log(countUniqueValues(arr1));
console.log(countUniqueValues(arr2));
console.log(countUniqueValues(arr3));
console.log(countUniqueValues(arr4));
