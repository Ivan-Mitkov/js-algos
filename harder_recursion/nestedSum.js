const nestedEvenSum = (object) => {
  let oddArray = [];

  let helper = (object) => {
    for (const key in object) {
      if (typeof object[key] === "object") {
        helper(object[key]);
      }
      if (typeof object[key] === "number" && object[key] % 2 === 0) {
        oddArray.push(object[key]);
      }
    }
    return;
  };
  helper(object);

  return oddArray.reduce((a, b) => a + b);
};

var obj1 = {
  outer: 2,
  obj: {
    inner: 4,
    otherObj: {
      superInner: 6,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 4 } } },
  c: { c: { c: 6 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 8 }, ee: "car" },
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
