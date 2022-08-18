function dontGiveMeFive(start, end) {
  let totalNumbers = [];
  for (let i = start; i <= end; i++) {
    totalNumbers.push(i);
  }
  let result = totalNumbers
    .filter((item) => item !== "5")
    .map((item) => 1)
    .reduce((t, c) => t + c);
  return result;
}

console.log(dontGiveMeFive(4, 17));
