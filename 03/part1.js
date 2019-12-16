const fs = require('fs');
const assert = require('assert');

// Find list of coordinates a wire travels through
const findCoords = wire => wire.split(',')
  .reduce((acc, corner) => {
    let newAcc = acc.slice();

    const direction = corner.substring(0, 1);
    const length = parseInt(corner.substring(1));

    for (i = 0; i < length; i++) {
      const tail = newAcc[newAcc.length - 1];
      switch (direction) {
        case 'L':
          newAcc.push({
            x: tail.x - 1,
            y: tail.y
          });
          break;
        
        case 'U':
          newAcc.push({
            x: tail.x,
            y: tail.y + 1
          });
          break;
        
        case 'R':
          newAcc.push({
            x: tail.x + 1,
            y: tail.y
          });
          break;
        
        case 'D':
          newAcc.push({
            x: tail.x,
            y: tail.y - 1
          });
      }
    }

    return newAcc;
  }, [{
    x: 0,
    y: 0
  }])

const [wire1, wire2] = fs.readFileSync('input.txt', 'utf8').split('\n');

const wire1_coords = findCoords(wire1);
const wire2_coords = findCoords(wire2);

const intersections = wire1_coords.slice(1).reduce((acc, wire1) => {
  let newAcc = acc.slice();

  wire2_coords.forEach(wire2 => {
    if (wire1.x === wire2.x && wire1.y === wire2.y) {
      newAcc.push(wire1);
    }
  })

  return newAcc;
}, [])

const closestIntersection = intersections.reduce((closest, { x, y }) => {
  const distance = Math.abs(x) + Math.abs(y);
  return distance < closest ? distance : closest;
}, 99999);

console.log(closestIntersection);
