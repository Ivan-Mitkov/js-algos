import { mergeSort } from "./mergeSort.js";
import { quickSort } from "./quickSort.js";
import { insertionSort } from "../elementary_sorting/insertionSort.js";

let arr3 = Array.apply(null, Array(10000)).map(function () {
  return Math.random() * 10000;
});

let arr31 = Array.apply(null, Array(10000)).map(function () {
  return Math.random() * 10000;
});

let arr4 = Array.apply(null, Array(5000)).map((x, i) => -i);
let arr41 = Array.apply(null, Array(5000)).map((x, i) => -i);
let arr5 = Array.apply(null, Array(5000)).map((x, i) => i);


setTimeout(() => {
  console.log();
  const s2 = new Date();
  insertionSort(arr3);
  const e2 = new Date();
  // console.log(arr3);
  console.log("Insertion sort", new Date(e2 - s2).getMilliseconds());
  arr3 = null;
}, 1000);
setTimeout(() => {
  console.log();
  const start = new Date();
  mergeSort(arr31);
  const end = new Date();
  // console.log(mergeSort(arr3));
  console.log("Merge sort", new Date(end - start).getMilliseconds());
}, 2000);

setTimeout(() => {
  console.log();
  const start2 = new Date();
  quickSort(arr31);
  const end2 = new Date();
  // console.log(arr3);
  console.log("Quick sort", new Date(end2 - start2).getMilliseconds());
  arr31 = null;
}, 3000);

setTimeout(() => {
  console.log();

  const start3 = new Date();
  mergeSort(arr4);
  const end3 = new Date();
  // console.log(mergeSort(arr3));
  console.log(
    "Merge sort - sorted reverse",
    new Date(end3 - start3).getMilliseconds()
  );
}, 4000);

setTimeout(() => {
  console.log();
  const start4 = new Date();
  quickSort(arr4);
  const end4 = new Date();
  // console.log(mergeSort(arr3));
  console.log(
    "Quick sort - sorted reverse",
    new Date(end4 - start4).getMilliseconds()
  );
  arr4 = null;
}, 5000);

setTimeout(() => {
  console.log();
  const start41 = new Date();
  insertionSort(arr41);
  const end41 = new Date();
  // console.log(mergeSort(arr3));
  arr41 = null;
  console.log(
    "Insertion sort - sorted reverse",
    new Date(end41 - start41).getMilliseconds()
  );
}, 6000);

setTimeout(() => {
  console.log();
  const start5 = new Date();
  mergeSort(arr5);
  const end5 = new Date();
  // console.log(mergeSort(arr3));
  console.log(
    "Merge sort - sorted ",
    new Date(end5 - start5).getMilliseconds()
  );
}, 7000);

setTimeout(() => {
  console.log();
  const start6 = new Date();
  quickSort(arr5);
  const end6 = new Date();
  // console.log(mergeSort(arr3));
  console.log("Quick sort - sorted", new Date(end6 - start6).getMilliseconds());
}, 8000);

setTimeout(() => {
  console.log();

  const start7 = new Date();
  insertionSort(arr5);
  const end7 = new Date();
  // console.log(mergeSort(arr3));
  console.log(
    "Insertion sort - sorted",
    new Date(end7 - start7).getMilliseconds()
  );
}, 9000);
