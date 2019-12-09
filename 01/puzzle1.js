const assert = require('assert');
const fs = require('fs');

const calculateFuel = x => Math.floor(x / 3) - 2;

assert(calculateFuel(12) == 2);
assert(calculateFuel(14) == 2);
assert(calculateFuel(1969) == 654);
assert(calculateFuel(100756) == 33583);

const masses = fs.readFileSync('input.txt', 'utf8')
  .split('\n')
  .map(n => parseInt(n));

const totalFuelRequired = masses.reduce((acc, n) => acc + calculateFuel(n), 0);
console.log(totalFuelRequired);
