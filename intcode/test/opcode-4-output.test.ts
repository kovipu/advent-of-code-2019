import { expect } from 'chai';
import { stdout } from 'test-console';

const compute = require('../src/intcode');

describe('opcode 4 outputs', () => {

  it('Should print 6969', () => {
    const input = [4, 3, 99, 6969];
    const output = '6969';
    const computed = stdout.inspectSync(() => compute(input))[0];
    expect(computed).to.include(output);
  })

  it('Should print -123', () => {
    const input = [104, -123, 99];
    const output = '-123';
    const computed = stdout.inspectSync(() => compute(input))[0];
    expect(computed).to.include(output);
  })
});
