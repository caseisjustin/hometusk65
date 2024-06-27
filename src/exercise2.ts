abstract class Vehicle {
    abstract start(): void;
    abstract stop(): void;
}

class Car extends Vehicle {
    start(): void {
        console.log("Car starting...");
    }

    stop(): void {
        console.log("Car stopping...");
    }
}

class MotorCycle extends Vehicle {
    start(): void {
        console.log("MotorCycle starting...");
    }

    stop(): void {
        console.log("MotorCycle stopping...");
    }
}

const car = new Car();
const motorcycle = new MotorCycle();

car.start();
car.stop();

motorcycle.start();
motorcycle.stop();