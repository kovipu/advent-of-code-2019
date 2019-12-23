const fs = require('fs');

const intcode = require('../intcode/build/intcode');

const input = fs.readFileSync('input.txt', 'utf8')
  .split(',')
  .map(n => parseInt(n));

intcode(input);