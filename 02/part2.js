const fs = require('fs');

const intcode = require('../intcode/build/intcode');

const input = fs.readFileSync('input1.txt', 'utf8')
  .split(',')
  .map(n => parseInt(n));

/*
input[1] is called noun
input[2] is called verb

Find the input noun and verb that cause the program to produce the output 19690720.
*/

const EXPECTED = 19690720;
let output = 0;

outer_loop:
for (noun = 0; noun < 100; noun++) {
  for (verb = 0; verb < 100; verb++) {
    input[1] = noun;
    input[2] = verb;
    output = intcode(input);

    if (output[0] == EXPECTED) {
      console.log("noun: ", noun);
      console.log("verb: ", verb);
      console.log("100 * noun + verb = ", 100 * noun + verb);
      break outer_loop;
    }
  }
}
