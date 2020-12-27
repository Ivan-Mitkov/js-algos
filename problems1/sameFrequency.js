//find out if the two positive integers have the same frequency of digits

const sameFrequency = (num1, num2) => {
  const stringNum1 = num1.toString();
  const stringNum2 = num2.toString();
  // console.log(stringNum2,stringNum1)
  if (stringNum1.length !== stringNum2.length) {
    return false;
  }
  const dictSet = {};
  for (const item of stringNum1) {
    if (!dictSet[item]) {
      dictSet[item] = 1;
    } else {
      dictSet[item] += 1;
    }
  }
  for (const item of stringNum2) {
    if (!dictSet[item]) {
      return false;
    } else {
      dictSet[item] -= 1;
      if (dictSet[item] === 0) {
        delete dictSet[item];
      }
    }
  }
  return Object.entries(dictSet).length === 0;
};

let a1 = 182,
  a2 = 281;
let b1 = 34,
  b2 = 14;
let c1 = 3589578,
  c2 = 5879385;
let d1 = 22,
  d2 = 222;

console.log(sameFrequency(a1, a2));
console.log(sameFrequency(b1, b2));
console.log(sameFrequency(c1, c2));
console.log(sameFrequency(d1, d2));
