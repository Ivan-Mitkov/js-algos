const fiboRecusive = (n) => {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  const fibo = fiboRecusive(n - 1) + fiboRecusive(n - 2);
  return fibo;
};

const fiboDynamicMap = (n) => {
  const alreadyFound = new Map();

  const helper = (n) => {
    //from n to 0
    if (n === 0) {
      alreadyFound.set(0, 0);
      alreadyFound.set(1, 1);
      return;
    }
    helper(n - 1);
    //from 0 to n
    if (!alreadyFound.has(n)) {
      alreadyFound.set(n, alreadyFound.get(n - 1) + alreadyFound.get(n - 2));
    }
  };
  helper(n);
  if (n <= 2) {
    return 1;
  }
  const fibo = alreadyFound.get(n - 1) + alreadyFound.get(n - 2);
  return fibo;
};
const fiboDynamic = (n) => {
  const memo = [];
  const helper = (n) => {
    //from n to 0
    if (n < 2) {
      memo[0] = 0;
      memo[1] = 1;
      return;
    }
    helper(n - 1);
    //from 0 to n
    if (!memo[n]) {
      memo[n] = memo[n - 1] + memo[n - 2];
    }
  };
  helper(n);
  return memo[n];
};

const fiboMemo = (n, memo = []) => {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  const fibo = fiboMemo(n - 1, memo) + fiboMemo(n - 2, memo);
  memo[n] = fibo;
  return fibo;
};

const fiboTabulated = (n) => {
  if (n <= 2) return 1;
  const fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
};
console.log(fiboRecusive(1));
console.log(fiboRecusive(5));
console.log(fiboRecusive(6));
console.log(fiboRecusive(7));
console.log(fiboRecusive(20));
console.log(fiboRecusive(30));
console.log(fiboRecusive(32));
console.log(fiboDynamic(1));
console.log(fiboDynamic(5));
console.log(fiboDynamic(6));
console.log(fiboDynamic(7));
console.log(fiboDynamic(20));
console.log(fiboDynamic(30));
console.log(fiboDynamic(1400));
console.log(fiboMemo(1));
console.log(fiboMemo(5));
console.log(fiboMemo(6));
console.log(fiboMemo(7));
console.log(fiboMemo(20));
console.log(fiboMemo(30));
console.log(fiboMemo(1400));
console.log(fiboTabulated(1400));
