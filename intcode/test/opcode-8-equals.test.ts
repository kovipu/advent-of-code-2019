import { expect } from 'chai';

const compute = require('../src/intcode');

describe('opcode 8 should should write 1 to address c if a == b', () => {

  it('should write 1 to position 6', () => {
    const input = [8, 5, 6, 6, 99, 8, 8];
    const output = [8, 5, 6, 6, 99, 8, 1];
    expect(compute(input)).eql(output);
  })

  it('should write 0 to position 6', () => {
    const input = [8, 5, 6, 6, 99, 9, 8];
    const output = [8, 5, 6, 6, 99, 9, 0];
    expect(compute(input)).eql(output);
  })
 
  it('should write 1 to position 5', () => {
    const input = [1108, 37, 37, 5, 99, -1];
    const output = [1108, 37, 37, 5, 99, 1];
    expect(compute(input)).eql(output);
  })
});