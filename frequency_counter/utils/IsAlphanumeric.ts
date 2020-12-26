const isAlphanumeric = (char: string): boolean => {
  const code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && //numeric
    !(code > 64 && code < 91) && //upper alpha
    !(code > 96 && code < 123) //lower alpha
  ) {
    return false;
  }

  return true;
};

const test = ["a", "z", "A", "Z", 0, 1, 2, 3, 4, 5, 9, " ", "!", ")", ""];

for (let char of test) {
  const ch = char.toString();
  console.log(isAlphanumeric(ch));
}
