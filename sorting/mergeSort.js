//merge two sorted array
const arr1 = [1, 10, 50];
const arr2 = [0, 14, 99, 100, 101];
const arr3 = Array.apply(null, Array(100000)).map(function () {
  return Math.random() * 1000;
});
const merge = (arr1, arr2) => {
  const sorted = [];
  let index1 = 0;
  let index2 = 0;
  while (index1 < arr1.length && index2 < arr2.length) {
    if (arr1[index1] <= arr2[index2]) {
      sorted.push(arr1[index1]);
      index1++;
    } else {
      sorted.push(arr2[index2]);
      index2++;
    }
  }
  while (index1 < arr1.length) {
    sorted.push(arr1[index1]);
    index1++;
  }
  while (index2 < arr2.length) {
    sorted.push(arr2[index2]);
    index2++;
  }
  return sorted;
};

export const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const arrLeft = mergeSort(arr.slice(0, middle));
  const arrRight = mergeSort(arr.slice(middle));
  return merge(arrLeft, arrRight);
};

// console.log(mergeSort(arr2));

//Just for clarity
// divide an array into two halves until it's only one element
const divide = (arr) => {
  if (arr.length <= 1) {
    // console.log(arr);
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const arrLeft = arr.slice(0, middle);
  const arrRight = arr.slice(middle);
  divide(arrLeft);
  divide(arrRight);
};
// divide(arr2);
// console.log(divide(arr2));

