//accept sorted array return first pair with sum zero
const sumZero = (arr) => {
  let counter = 0;
  let first = 0;
  let last = arr.length - 1;
  for (first; first < last; ) {
    let sum = arr[first] + arr[last];
    counter++;
    if (sum === 0) return [arr[first], arr[last], counter];
    if (sum > 0) {
      counter++;
      last--;
    }
    if (sum < 0) {
      counter++;
      first++;
    }
  }
  return [counter];
};

const sumZero2 = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  let counter = 0;
  while (left < right) {
    let sum = arr[left] + arr[right];
    counter++;
    if (sum === 0) {
      return [arr[left], arr[right], counter];
    } else if (sum < 0) {
      counter++;
      left++;
    } else if (sum > 0) {
      counter++;
      right--;
    }
  }
  return counter;
};

const arr1 = [-3, -2, -1, 0, 1, 2, 3];
const arr2 = [-2, -1, 0, 1, 4, 5];
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr4 = [-10, -9, -8, -7, -6, -1, 1, 2, 3];

console.log(sumZero(arr1));
console.log(sumZero(arr2));
console.log(sumZero(arr3));
console.log(sumZero(arr4));
console.log(sumZero2(arr1));
console.log(sumZero2(arr2));
console.log(sumZero2(arr3));
console.log(sumZero2(arr4));
