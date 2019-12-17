import readlineSync from 'readline-sync';

const OP_ADD = 1;
const OP_MULTIPLY = 2;
const OP_INPUT = 3;
const OP_HALT = 99;

const compute = (program: number[]): number[] => {
  let data: number[] = program.slice();
  let program_counter: number = 0;

  while (program_counter < data.length) {
    const current_value: number = data[program_counter];

    // helper function to execute a three operand operation with a changing function
    // this is pretty darn ugly but it works so...
    const threeOperand = (data: number[], idx: number, fn: (a: number, b: number) => number) => {
      data[data[idx + 3]] = fn(data[data[idx + 1]], data[data[idx + 2]]);
    }

    switch(current_value) {
      case OP_ADD:
        threeOperand(data, program_counter, (a, b) => a + b);
        program_counter += 4;
        break;
      
      case OP_MULTIPLY:
        threeOperand(data, program_counter, (a, b) => a * b);
        program_counter += 4;
        break;

      case OP_HALT:
        return data; // return also breaks here
      
      case OP_INPUT:
        const input = readlineSync.question('User input: ');
        console.log('asd', input);
        data[data[program_counter + 1]] = parseInt(input);
        program_counter += 2;
        break;
      
      default:
        throw new Error(`Operation not defined: ${current_value}`);
    }
  }

  return data; // this is against the spec and should prolly throw an error or whatevs ¯\_(ツ)_/¯
}

module.exports = compute; // this bullshit export to work with non modules
