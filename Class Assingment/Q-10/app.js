//Q-10 : Implement a class hierarchy for different vehicles (e.g., Car, Motorcycle) with a common base class. Calculate their maximum speed

class Vehicle {
    constructor(make, model, maxSpeed) {
        this.make = make;
        this.model = model;
        this.maxSpeed = maxSpeed; // in km/h
    }

    displayDetails() {
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Maximum Speed: ${this.maxSpeed} km/h`);
    }
}

class Car extends Vehicle {
    constructor(make, model, maxSpeed, numberOfDoors) {
        super(make, model, maxSpeed);
        this.numberOfDoors = numberOfDoors;
    }

    displayDetails() {
        super.displayDetails();
        console.log(`Number of Doors: ${this.numberOfDoors}`);
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, maxSpeed, hasSidecar) {
        super(make, model, maxSpeed);
        this.hasSidecar = hasSidecar;
    }

    displayDetails() {
        super.displayDetails();
        console.log(`Has Sidecar: ${this.hasSidecar ? 'Yes' : 'No'}`);
    }
}

const myCar = new Car('Toyota', 'Camry', 240, 4);
const myMotorcycle = new Motorcycle('Harley-Davidson', 'Street 750', 180, false);

console.log("Car Details:");
myCar.displayDetails();
console.log("\nMotorcycle Details:");
myMotorcycle.displayDetails();
