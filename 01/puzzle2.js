const assert = require('assert');
const fs = require('fs');

// This is the threshold where no more fuel is required.
const FUEL_THRESHOLD = 9;

const calculateFuel = n => {
  const fuel = Math.floor(n / 3) - 2;
  
  return fuel < FUEL_THRESHOLD
    ? fuel
    : fuel + calculateFuel(fuel);
}

assert(calculateFuel(14) == 2);
assert(calculateFuel(1969) == 966);
assert(calculateFuel(100756) == 50346);

const masses = fs.readFileSync('input.txt', 'utf8')
  .split('\n')
  .map(n => parseInt(n));

const totalFuelRequired = masses.reduce((acc, n) => acc + calculateFuel(n), 0);
console.log(totalFuelRequired);
