const swap = (arr, idx1, idx2) =>
  ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
let arr = [300, 100, 21];
let arr2 = [-5, -71, 2, 3, 0, 5, 3, 6, -7, 8, 9, 10, -5];
// swap(arr, 0, 1);
// console.log(arr);

const insertionSort = (arr) => {
  let j;
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      // console.log(arr)
    }
    arr[j + 1] = currentVal;
    // console.log('second: ',arr)

  }
};

insertionSort(arr);
insertionSort(arr2);
console.log(arr);
console.log(arr2);
