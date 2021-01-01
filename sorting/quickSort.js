let swap = (arr, i, y) => ([arr[i], arr[y]] = [arr[y], arr[i]]);

const pivotHelper = (arr, startIndex = 0, endIndex = arr.length - 1) => {
  let pivot = startIndex;
  const pivotEl = arr[startIndex];
  for (let i = startIndex; i <= endIndex; i++) {
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
const arr2 = [0, 10, 2, 3, 4, 5, 6, 7, 8, 9, 1];
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

Array.prototype.quick_sort = function () {
  //if there is no more then one element
  if (this.length < 2) {
    console.log(this)
    return this;
  }
  //more elements so take middle
  const pivot = this[Math.round(this.length / 2)];
  // console.log(pivot)

  return this.filter((x) => x < pivot)
  //quick sort on the left side
    .quick_sort()
    //concat pivot
    .concat(this.filter((x) => x == pivot))
    //quick sort on the right side
    .concat(this.filter((x) => x > pivot).quick_sort());
};
// console.log(quickSort(arr1));

console.log(arr2.quick_sort());
arr2.quick_sort()