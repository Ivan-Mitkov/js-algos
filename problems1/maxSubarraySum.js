//args - array and length of subarray
//return maximum sum of subarray

const maxSubarraySum = (arr, n) => {
  if (arr.length < n) return null;
  let maxSum = 0;
  let tempSum = 0;
  const firstSum = arr.slice(0, n).reduce((a, b) => a + b);
  maxSum = firstSum;
  for (let index = 1; index < arr.length; index++) {
    //if is because of Array.slice
    if (arr.length - (n + index) >= 0) {
      tempSum = arr.slice(index, n + index).reduce((a, b) => a + b);
      maxSum = Math.max(tempSum, maxSum);
    }
  }
  return maxSum;
};

console.log(maxSubarraySum([100, 200, 300, 400], 2)); //700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); //39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); //5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); //5
console.log(maxSubarraySum([2, 3], 3)); //null
