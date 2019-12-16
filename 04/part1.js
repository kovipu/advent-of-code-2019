const R = require('ramda');
const assert = require('assert');

const getIndividualDigits = num => num.toString()
  .split('')
  .map(n => parseInt(n));

assert(R.equals(getIndividualDigits(111111), [1, 1, 1, 1, 1, 1]));

// return true if all digits in a number are in ascending order
const isAscending = num => {
  const individualDigits = getIndividualDigits(num);
  
  if (R.equals(individualDigits, individualDigits.slice().sort())) {
    return true;
  }

  return false;
}

assert(isAscending(111111));
assert(isAscending(122345));
assert(!isAscending(223450));

// return true if any two adjacent digits in a number are the same
const hasDouble = num => {
  const digits = getIndividualDigits(num);

  return digits[0] == digits[1]
    || digits[1] == digits[2]
    || digits[2] == digits[3]
    || digits[3] == digits[4]
    || digits[4] == digits[5];
}

assert(hasDouble(111111));
assert(hasDouble(223450));
assert(!hasDouble(123789));

const START = 372037;
const END = 905157;

const nums = R.range(START, END);

const passwords = nums.filter(num => isAscending(num) && hasDouble(num));

console.log(passwords.length);