import { expect } from 'chai';

const compute = require('../src/intcode');

describe('opcode 5 should jump if first parameter is non-zero', () => {

  it('should write 5 + 5 to position 10', () => {
    const input = [5, 0, 3, 5, 99, 1, 0, 3, 10, 99, 0];
    const output = [5, 0, 3, 5, 99, 1, 0, 3, 10, 99, 10];
    expect(compute(input)).eql(output);
  })

  it('should write 1 + 1 to position', () => {
    const input = [1105, 1, 4, 99, 1101, 1, 1, 8, 0];
    const output = [1105, 1, 4, 99, 1101, 1, 1, 8, 2];
    expect(compute(input)).eql(output);
  })
 
  it('should not manipulate data', () => {
    const input = [1105, 0, 4, 99, 1101, 1, 1, 8, 0];
    const output = [1105, 0, 4, 99, 1101, 1, 1, 8, 0];
    expect(compute(input)).eql(output);
  })
});