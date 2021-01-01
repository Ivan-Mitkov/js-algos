let swap = (arr, i, y) => ([arr[i], arr[y]] = [arr[y], arr[i]]);

const pivotHelper = (arr, startIndex = 0, endIndex = arr.length - 1) => {
 
  let pivot = startIndex;
  const pivotEl = arr[startIndex];
  for (let i = startIndex + 1; i <= endIndex; i++) {
    if (pivotEl > arr[i]) {
      pivot++;
      swap(arr, i, pivot);
      // console.log(arr);
    }
  }

  swap(arr, startIndex, pivot);

  return pivot;
};

const arr1 = [5, -1, 4, 11, 9, 6, 7, 2, 1, -2, 0];
// console.log(pivotHelper(arr1));

export const quickSort = (arr, left = 0, right = arr.length) => {
  if (left < right) {
    const pivot = pivotHelper(arr, left, right);
    // console.log(pivot)
    //left side
    quickSort(arr, left, pivot - 1);
    //right side
    quickSort(arr, pivot + 1, right);
  }
  return arr;
};

// console.log(quickSort(arr1));
