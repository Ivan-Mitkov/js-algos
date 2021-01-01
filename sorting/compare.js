import { mergeSort } from "./mergeSort.js";
import { quickSort } from "./quickSort.js";

const arr3 = Array.apply(null, Array(99999)).map(function () {
  return Math.random() * 10000;
});
// const arr4 = Array.apply(null, Array(1000)).map(function () {
//   return Math.random() * 1000;
// });

console.log("Merge sort");
const start = new Date();
mergeSort(arr3);
const end = new Date();
// console.log(mergeSort(arr3));
console.log(new Date(end - start).getMilliseconds());
console.log("Quick sort");
const start2 = new Date();
quickSort(arr3);
const end2 = new Date();
// console.log(arr3);

console.log(new Date(end2 - start2).getMilliseconds());
