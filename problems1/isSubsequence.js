//args: two strings
//return true if charachters in the first string form a subsequence in the second

const isSubsequence = (str1, str2) => {
  const arrFirst = str1.split("");
  const arrSecond = str2.split("");
  let first = 0,
    second = 0;
  const subsequence = [];
  for (second = 0; second < arrSecond.length; second++) {
    if (arrSecond[second] === arrFirst[first]) {
      subsequence.push(arrSecond[second]);
      first++;
    }
  }

  return subsequence.join("") === str1;
};

console.log(isSubsequence("hello", "hello world")); //true
console.log(isSubsequence("sing", "sting")); //true
console.log(isSubsequence("abc", "abracadabra")); //true
console.log(isSubsequence("abc", "acb")); //false - order matter
