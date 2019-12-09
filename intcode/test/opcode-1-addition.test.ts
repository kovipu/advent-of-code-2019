import { expect } from 'chai';

import compute from '../src/intcode';

describe('opcode 1 should do addition', () => {

  it('should write 1 + 1 to position 0', () => {
    const input = [1, 0, 0, 0, 99];
    const output = [2, 0, 0, 0, 99];
    expect(compute(input)).eql(output);
  })
});
