import { expect } from 'chai';

const compute = require('../src/intcode');

describe('opcode 6 should jump if first parameter is zero', () => {
  
  it('should write 6 + 6 to position 9', () => {
    const input = [6, 6, 3, 5, 99, 1, 0, 1, 10, 99, 0];
    const output = [6, 6, 3, 5, 99, 1, 0, 1, 10, 99, 12];
    expect(compute(input)).eql(output);
  })

  it('should write 1 + 1 to position 8', () => {
    const input = [1106, 0, 4, 99, 1101, 1, 1, 8, 0];
    const output = [1106, 0, 4, 99, 1101, 1, 1, 8, 2];
    expect(compute(input)).eql(output);
  })

  it('should not manipulate data', () => {
    const input = [1106, 1, 4, 99, 1101, 1, 1, 8, 0];
    const output = [1106, 1, 4, 99, 1101, 1, 1, 8, 0];
    expect(compute(input)).eql(output);
  })
});