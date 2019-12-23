import readlineSync from 'readline-sync';

// arithmetic
const OP_ADD = 1;
const OP_MULTIPLY = 2;

// I/O
const OP_INPUT = 3;
const OP_OUTPUT = 4;

// comparison
const OP_JUMP_IF_TRUE = 5;
const OP_JUMP_IF_FALSE = 6;
const OP_LESS_THAN = 7;
const OP_EQUALS = 8;

const OP_HALT = 99;

// parse instruction into opcode and parameter modes
const parseInstruction = (instruction: number): [number, boolean, boolean, boolean] => {
  const opcode: number = parseInt(instruction.toString().slice(-2));
  const imm_mode_1: boolean = instruction.toString().slice(-3, -2) === '1';
  const imm_mode_2: boolean = instruction.toString().slice(-4, -3) === '1';
  const imm_mode_3: boolean = instruction.toString ().slice(-5, -4) === '1';
  return [opcode, imm_mode_1, imm_mode_2, imm_mode_3];
}

const compute = (program: number[]): number[] => {
  let data: number[] = program.slice();
  let program_counter: number = 0;

  while (program_counter < data.length) {
    const current_value: number = data[program_counter];
    const opcode: number = parseInt(current_value.toString().slice(-2));

    // helper function to execute a three operand operation
    // this is pretty darn ugly but it works so...
    const threeOperand = (data: number[], idx: number, value: number) => {
      const [opcode, imm_mode_1, imm_mode_2, _] = parseInstruction(value);
      
      const operand1: number = imm_mode_1 ? data[idx + 1] : data[data[idx+1]];
      const operand2: number = imm_mode_2 ? data[idx + 2] : data[data[idx + 2]];

      const operations: { [key: number]: (a: number, b: number) => number } = {
        [OP_ADD]: (a, b) => a + b,
        [OP_MULTIPLY]: (a, b) => a * b,
        [OP_LESS_THAN]: (a, b) => a < b ? 1 : 0,
        [OP_EQUALS]: (a, b) => a === b ? 1 : 0
      }

      const result: number = operations[opcode](operand1, operand2);
      
      data[data[idx + 3]] = result;
    }

    // helper function for comparison operations
    const compare = (data: number[], idx: number, value: number) => {
      const [opcode, imm_mode_1, imm_mode_2, _] = parseInstruction(value);

      const operand1: number = imm_mode_1 ? data[idx + 1] : data[data[idx + 1]];
      const operand2: number = imm_mode_2 ? data[idx + 2] : data[data[idx + 2]];

      if ((opcode === OP_JUMP_IF_TRUE && operand1 !== 0)
          || (opcode === OP_JUMP_IF_FALSE && operand1 === 0)) {
        program_counter = operand2;
      } else {
        program_counter += 3;
      }
    }

    switch(opcode) {
      case OP_ADD:
      case OP_MULTIPLY:
      case OP_LESS_THAN:
      case OP_EQUALS:
        threeOperand(data, program_counter, current_value);
        program_counter += 4;
        break;

      case OP_HALT:
        return data; // return also breaks here
      
      case OP_INPUT:
        const input = readlineSync.question('User input: ');
        const inputParsed = parseInt(input);
        if (isNaN(inputParsed)) throw new Error(`Invalid input: ${input}`);
        data[data[program_counter + 1]] = inputParsed;
        program_counter += 2;
        break;
      
      case OP_OUTPUT:
        const imm_mode: boolean = current_value.toString().slice(-3, -2) === '1';
        const value: number = imm_mode
          ? data[program_counter + 1]
          : data[data[program_counter + 1]];
        console.log(value);
        program_counter += 2;
        break;

      case OP_JUMP_IF_TRUE:
      case OP_JUMP_IF_FALSE:
        compare(data, program_counter, current_value);
        break;

      default:
        throw new Error(`Operation not defined: ${current_value}`);
    }
  }

  return data; // this is against the spec and should prolly throw an error or whatevs ¯\_(ツ)_/¯
}

module.exports = compute; // this bullshit export to work with non-module JS
