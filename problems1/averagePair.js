// args: sorted array of integers and target average
//return true if there is pair of values with the same average

const averagePair = (arr, aver) => {
  let first = 0,
    second = arr.length - 1;
  if (arr.length === 0) return false;
  while (first < second) {
    let average = (arr[first] + arr[second]) / 2;
    if (average === aver) {
      return true;
    }
    if (average > aver) {
      second--;
    }
    // console.log(
    //   first,
    //   ":",
    //   arr[first],
    //   "- ",
    //   second,
    //   ":",
    //   arr[second],
    //   " aver: ",
    //   average
    // );
    first++;
  }

  return false;
};

const arr1 = [1, 2, 3];
const aver1 = 2.5;
const arr2 = [1, 3, 3, 5, 6, 7, 10, 12, 19];
const aver2 = 8;
const arr3 = [-1, 0, 3, 4, 5, 6];
const aver3 = 4.1;
const arr4 = [];
const aver4 = 4;

console.log(averagePair(arr1, aver1));
console.log(averagePair(arr2, aver2));
console.log(averagePair(arr3, aver3));
console.log(averagePair(arr4, aver4));
