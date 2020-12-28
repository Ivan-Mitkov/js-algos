//args - array of positive integers and positive integer n
//return minimum length of subarray which sum is greater or equal to n, if there isn't one return 0

const minSubArrayLen = (arr, n) => {
  let minLen = 0;
  let curr = 0;
  let sum = 0;
  //find first subarray
  while (curr < arr.length && sum < n) {
    sum += arr[curr];
    curr++;
  }
  minLen = curr - 1;
  
  if (sum < n) return 0;
  let right = curr ;
  let left = 1;
  let tempSum = sum;

  while (right < arr.length) {
    tempSum = tempSum - arr[left] + arr[right];
    while (tempSum >= n) {
      minLen = Math.min(minLen, right - left);
      left++;
      tempSum = tempSum - arr[left];
    }

    right++;
  }
  return minLen;
};
console.log(minSubArrayLen([1, 2, 3, 4, 5, 6, 7], 10)); //2 [5,6]
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); //2 [4,3]
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); //2 [5,4]
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); //1 [62]
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); //3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); //5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); //2
