const binarySearch = (arr, searchVal) => {
  let minIndex = 0,
    maxIndex = arr.length - 1;
  while (minIndex <= maxIndex) {
    let middleIndex = Math.floor((minIndex + maxIndex) / 2);
    let currentEl = arr[middleIndex];
    if (currentEl < searchVal) {
      minIndex = middleIndex + 1;
    } else if (currentEl > searchVal) {
      maxIndex = middleIndex - 1;
    } else {
      return middleIndex;
    }
  }
  return -1;
};
const arr = [1, 2, 2, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9, 11, 23, 34, 44, 54, 56, 67];
console.log(binarySearch(arr, 2));
console.log(binarySearch(arr, 6));
console.log(binarySearch(arr, 67));
