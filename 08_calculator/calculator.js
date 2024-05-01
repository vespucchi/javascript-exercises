const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  if (a < b) [a, b] = [b, a];
	return a - b;
};

const sum = function(array) {
  let sum = 0;
  array.forEach(item => sum += item);

  // reduce(callbackFn, initialValue)
  // array.reduce((total, current) => total + current, 0);

	return sum;
};

const multiply = function(array) {
  let product = 1;
  array.forEach(item => product *= item);

  // reduce(callbackFn, initialValue)
  // array.reduce((product, current) => product * current);

	return product === 1 ? 0 : product;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  if(a === 0) return 1;
  if(a === 1) return 1;

  let product = 1;

	for(let i = 2; i <= a; i++) {
    product *= i;
  }

  return product;
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
