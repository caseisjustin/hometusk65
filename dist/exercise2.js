"use strict";
class Vehicle {
}
class Car extends Vehicle {
    start() {
        console.log("Car starting...");
    }
    stop() {
        console.log("Car stopping...");
    }
}
class MotorCycle extends Vehicle {
    start() {
        console.log("MotorCycle starting...");
    }
    stop() {
        console.log("MotorCycle stopping...");
    }
}
const car = new Car();
const motorcycle = new MotorCycle();
car.start();
car.stop();
motorcycle.start();
motorcycle.stop();
