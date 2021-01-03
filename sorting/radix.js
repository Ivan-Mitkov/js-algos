const getDigit = (num, position) => {
  let res = 0;
  num = Math.abs(num);
  while (position > -1) {
    res = num % 10;
    num = num / 10;
    position--;
  }
  return Math.floor(res);
};
const getDigit2 = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

// console.log(getDigit(-23450, 4));
// console.log(getDigit2(-23450, 4));

const getDigitCount = (num) => {
  if (num === 0) return 1;
  let res = 0;
  num = Math.abs(num);
  while (num >= 1) {
    num = num / 10;
    res++;
  }
  return res;
};

const getDigitCount2 = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

// console.log(getDigitCount(10));
// console.log(getDigitCount2(10));

const mostDigits = (arrNums) => {
  let maxDigits = 0;
  for (let i = 0; i < arrNums.length; i++) {
    maxDigits = Math.max(maxDigits, getDigitCount(arrNums[i]));
  }
  return maxDigits;
};

// console.log(mostDigits([1,11,21,345,4567]));

export const radixSort = (arrNums) => {
  //how many positions k

  let maxDigits = mostDigits(arrNums);
  //for each position
  for (let k = 0; k < maxDigits; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    //for each number get digit at position k
    for (let i = 0; i < arrNums.length; i++) {
      //put number at the bucket with that index
      let currDigit = getDigit(arrNums[i], k);
      digitBuckets[currDigit].push(arrNums[i]);
    }
    // console.log(`digit bucket ${k+1} digit:`,...digitBuckets)
    //concat different arrays k and form new array
    //this is the key line
    arrNums = [].concat(...digitBuckets);
    // console.log(`nums ${k}:`,...arrNums)

  }
  return arrNums;
};

// console.log(radixSort([3, 11, 21, 11, 4567, 23, 45, 78905, 23, 113, 0,1,7,2,10000001]));
