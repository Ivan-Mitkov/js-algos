const swap = (arr, idx1, idx2) =>
  ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
let arr = [300, 100, 21, 12, 45, 56, 89, 2, 3, 43, 220,0];
let arr2 = [-5,-71, 2, 3, 0, 5, 3, 6, -7, 8, 9, 10,-5];
// swap(arr, 0, 1);
// console.log(arr);

const selectionsort = (arr) => {
  for (let i = 0; i < arr.length-1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    swap(arr, i, minIndex);
  }
};

selectionsort(arr);
selectionsort(arr2);
console.log(arr);
console.log(arr2);
