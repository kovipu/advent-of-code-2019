import { expect } from 'chai';

const compute = require('../src/intcode');

describe('opcode 0 is invalid"', () => {

  it('Should throw "Operation not defined: 0"', () => {
    const input = [0, 99];
    expect(() => compute(input)).to.throw();
  })
});
