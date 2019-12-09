import { expect } from 'chai';

import compute from '../src/intcode';

describe('opcode 99 should halt immediately', () => {

  it('halts immediately and returns [99]', () => {
    expect(compute([99])).eql([99]);
  })

  it('halts immediately and returns [99, 1, 1, 0]', () => {
    expect(compute([99, 1, 1, 0])).eql([99, 1, 1, 0]);
  })
});
