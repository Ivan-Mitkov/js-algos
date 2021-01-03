const fizz = (x) =>
  x % 3 === 0 && x % 5 !== 0 && x % 15 !== 0 && console.log("fizz", x);
const buzz = (x) => x % 5 === 0 && x % 15 !== 0 && console.log("buzz", x);
const fizzbuzz = (x) => x % 15 === 0 && console.log("fizzbuzz", x);

const arr = Array.apply(null, Array(101))
  .map((x, i) => i)
  .map((x) => {
    fizz(x);
    buzz(x);
    fizzbuzz(x);
  });

// console.log(arr);
