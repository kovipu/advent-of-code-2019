import { expect } from 'chai';
import robot from 'robotjs';

const compute = require('../src/intcode');

const roboInput = (input: string) => {
  robot.typeString(input);
  robot.keyTap("enter");
}; 

describe('opcode 3 takes input from user', () => {

  it('stores value 123 in address 0', () => {
    roboInput('123');
    expect(compute([3, 0, 99])).eql([123, 0, 99]);
  })
});