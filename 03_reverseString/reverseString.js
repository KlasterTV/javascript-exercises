const reverseString = function (str) {
  let splitstring = str.split("");
  let reverseArray = splitstring.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
};

// return str.split("").reverse().join("");

// Do not edit below this line
module.exports = reverseString;
