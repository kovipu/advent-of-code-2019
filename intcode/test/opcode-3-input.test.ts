import { expect } from 'chai';
import robot from 'robotjs';

const compute = require('../src/intcode');

const roboInput = (input: string) => {
  robot.typeString(input);
  robot.keyTap("enter");
}; 

describe('opcode 3 takes input from user', () => {

  it('stores value 123 in address 0', () => {
    const input = [3, 0, 99];
    const output = [123, 0, 99];
    roboInput('123');
    expect(compute(input)).eql(output);
  })

  it('throws on invalid input', () => {
    const input = [3, 0, 99];
    roboInput('CRASH');
    expect(() => compute(input)).to.throw();
  })
});