//Q-14 :  Create a class hierarchy for different geometric shapes (e.g., Circle, Square) with a common base class. Calculate their areas

class Shape {

    area() {
        throw new Error("This method should be overridden in subclasses");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super();
        this.sideLength = sideLength;
    }

    area() {
        return Math.pow(this.sideLength, 2);
    }
}

const myCircle = new Circle(3);
const mySquare = new Square(2);

console.log(`Circle Area: ${myCircle.area().toFixed(2)}`); 
console.log(`Square Area: ${mySquare.area()}`); 
