const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  let result = arr.length > 1
    ? arr.reduce((arg, nextarg) => arg + nextarg, 0)
    : arr.length === 0 ? 0
      : arr[0];
  return result;
};

const multiply = function (arr) {
  let result = arr.length > 1
    ? arr.reduce((arg, nextarg) => arg * nextarg)
    : arr.length === 0 ? 0
      : arr[0];
  return result;
};

const power = function (num, pow) {
  return Math.pow(num, pow);
};

const factorial = function (num) {
  let result = 1;
  if (num > 0) {
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
