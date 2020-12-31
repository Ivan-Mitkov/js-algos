const capitalizeFirst = (arr) => {
  let newArray = [];
  let helper = (arr) => {
    if (arr.length === 0) {
      return;
    } else {
      let currentString = arr[arr.length - 1];
      newArray.push(
        currentString[0].toUpperCase() +
          currentString.slice(1, currentString.length)
      );
    }
    return helper(arr.slice(0, arr.length - 1));
  };
  helper(arr);
  return newArray.reverse();
};

console.log(capitalizeFirst(["car", "taco", "banana"]));
