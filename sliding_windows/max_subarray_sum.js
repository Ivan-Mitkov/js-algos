//pass array and a number n, should calculate the maximum sum of n consecutive elements in the array, return this sum

const maxSubarraySumNaive = (arr, n) => {
  let maxSum = -Infinity;
  let i = 0;
  if (arr.length === 0) return null;
  while (i < arr.length - n + 1) {
    let sum = 0;
    for (let index = i; index < i + n; index++) {
      sum += arr[index];
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
    i++;
  }

  return maxSum;
};

const maxSubarraySum = (arr, n) => {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < n) return null;
  //sum first window
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = n; i < arr.length; i++) {
    //sliding window - from window sum substract one at the beggining and add one at the end
    tempSum = tempSum - arr[i - n] + arr[i];

    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
};

const arr1 = [1, 2, 5, 2, 8, 1, 5];
const arr2 = [4, 2, 1, 6];
const arr3 = [4, 2, 1, 6, 2];
const arr4 = [];

console.log(maxSubarraySum(arr1, 2));
console.log(maxSubarraySum(arr1, 4));
console.log(maxSubarraySum(arr2, 1));
console.log(maxSubarraySum(arr3, 4));
console.log(maxSubarraySum(arr4, 4));
