const add = function(num1, num2) {
  return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(num) {
  if(num.length == 0) return 0
  return num.reduce((result, value) => result + value)
};

const multiply = function(num) {
  return num.reduce((result, value) => result * value)
};

const power = function(num1, num2) {
	return Math.pow(num1, num2)
};

const factorial = function(num) {
  for(let i = num; i > 1; i--){
    num *= (i - 1)
  }
  return num
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
