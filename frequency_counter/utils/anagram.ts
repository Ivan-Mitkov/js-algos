const a1 = "";
const a2 = "";

const b1 = "aaz";
const b2 = "zza";

const c1 = "anagram";
const c2 = "nagaram";

const d1 = "rat  sdc";
const d2 = "car tsd";

const e1 = "awesome";
const e2 = "awesom";

const fa1 = "qwerty";
const fa2 = "qyewrt";

const anagram = (word1: string, word2: string) => {
  //if length is different return false
  if (word2.length !== word1.length) {
    return false;
  }
  //for every number in arr1 must have number*number in arr2
  //save all frequency in hashmap
  interface Dict {
    [key: string]: number;
  }
  const dict: Dict = {};
  word1.split("").forEach((x) => {
    if (!dict[x]) {
      dict[x] = 1;
    } else {
      dict[x] = ++dict[x];
    }
  });
  // console.dir(dict);
  for (const y of word2) {
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

console.log(a1, anagram(a1, a2));
console.log(b1, anagram(b1, b2));
console.log(c1, anagram(c1, c2));
console.log(d1, anagram(d1, d2));
console.log(e1, anagram(e1, e2));
console.log(fa1, anagram(fa1, fa2));
