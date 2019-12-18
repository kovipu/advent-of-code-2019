import { expect } from 'chai';

const compute = require('../src/intcode');

describe('opcode 2 should do multiplication', () => {

  it('should write 2 * 3 to position 3', () => {
    const input = [2, 3, 0, 3, 99];
    const output = [2, 3, 0, 6, 99];
    expect(compute(input)).eql(output);
  })

  it('should write 99 * 99 to position 5', () => {
    const input = [2,4,4,5,99,0];
    const output = [2,4,4,5,99,9801];
    expect(compute(input)).eql(output);
  })

  it('should use 3 as immediate and write 3 * 5 to position 5', () => {
    const input = [1002, 3, 3, 5, 99, 0];
    const output = [1002, 3, 3, 5, 99, 15];
    expect(compute(input)).eql(output);
  })
});
