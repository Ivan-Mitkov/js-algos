const swap = (arr, idx1, idx2) =>
  ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
let arr = [300, 100, 21, 12, 45, 56, 89, 2, 3, 43, 220];
let arr2 = [1, 2, 3, 0, 5, 3, 6, 7, 8, 9, 10, 0];
// swap(arr, 0, 1);
// console.log(arr);

const bubblesort = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) if (arr[j] > arr[i]) swap(arr, i, j);
  }
};


const bubblesortOpt = (arr) => {
  let noSwaps;
  for (let i = arr.length - 1; i >= 0; i--) {
    noSwaps = true;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[i]) {
        swap(arr, i, j);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
};
bubblesort(arr);
// bubblesortOpt(arr);
bubblesortOpt(arr2);
// console.log(arr);
console.log(arr2);
