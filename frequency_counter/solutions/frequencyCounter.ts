const f1 = [1, 2, 3];
const f2 = [4, 1, 9];

const s1 = [1, 2, 3];
const s2 = [9, 1];

const t1 = [1, 2, 1];
const t2 = [4, 1, 8];

const sameMy = (arr1: number[], arr2: number[]) => {
  //if length is different return false
  if (arr2.length !== arr1.length) {
    return false;
  }
  //for every number in arr1 must have number*number in arr2
  //save all frequency in hashmap
  interface Dict {
    [key: number]: number;
  }
  const dict: Dict = {};
  arr1.forEach((x) => {
    if (!dict[x * x]) {
      dict[x * x] = 1;
    } else {
      dict[x * x] = ++dict[x];
    }
  });
  // console.dir(dict);
  for (const y of arr2) {
    if (!dict[y]) {
      return false;
    } else {
      dict[y] = --dict[y];
    }
  }

  // console.log(dict);
  //for every elem in dict check if there is value !==0
  let res = 0;
  for (const key in dict) {
    if (dict[key] !== 0) {
      res++;
    }
  }
  return res === 0;
};

console.log(sameMy(f1, f2));
console.log(sameMy(s1, s2));
console.log(sameMy(t1, t2));
