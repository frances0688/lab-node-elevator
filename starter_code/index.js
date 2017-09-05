const Elevator = require('./elevator.js');
const Person = require('./person.js');

const otherElevator = new Elevator();

otherElevator.start();
otherElevator.floorUp();
otherElevator.update();
otherElevator.floorDown();
otherElevator.update();