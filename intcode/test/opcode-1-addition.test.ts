import { expect } from 'chai';

const compute = require('../src/intcode');

describe('opcode 1 should do addition', () => {

  it('should write 1 + 1 to position 0', () => {
    const input = [1, 0, 0, 0, 99];
    const output = [2, 0, 0, 0, 99];
    expect(compute(input)).eql(output);
  })

  it('should use 3 as immediate and write 3 + 8 to position 5', () => {
    const input = [1001, 3, 3, 5, 99, 0];
    const output = [1001, 3, 3, 5, 99, 8];
    expect(compute(input)).eql(output);
  })
});
