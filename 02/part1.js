const fs = require('fs');

const intcode = require('../intcode/build/intcode');

const input = fs.readFileSync('input1.txt', 'utf8')
  .split(',')
  .map(n => parseInt(n));

input[1] = 12;
input[2] = 2;

console.log(intcode(input)[0]);
