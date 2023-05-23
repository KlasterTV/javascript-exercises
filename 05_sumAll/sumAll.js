const sumAll = function (start, end) {
  if (
    typeof start !== "number" ||
    typeof end !== "number" ||
    start < 0 ||
    end < 0
  ) {
    return "ERROR";
  }
  const arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  let sum = 0;
  arr.forEach((each) => {
    sum += each;
  });
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
