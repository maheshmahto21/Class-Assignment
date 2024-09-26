//Q-16 :Implement a class hierarchy for different shapes (e.g., Circle, Rectangle) with a common base class. Calculate their areas and perimeters

class Shape {
    // Common methods to be overridden
    calculateArea() {
        throw new Error("calculateArea method must be implemented in subclasses");
    }

    calculatePerimeter() {
        throw new Error("calculatePerimeter method must be implemented in subclasses");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    // Overriding the calculateArea method
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    // Overriding the calculatePerimeter method
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    // Overriding the calculateArea method
    calculateArea() {
        return this.width * this.height;
    }

    // Overriding the calculatePerimeter method
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}


try {
    const myCircle = new Circle(5);
    console.log(`Circle Area: ${myCircle.calculateArea().toFixed(2)}`); 
    console.log(`Circle Perimeter: ${myCircle.calculatePerimeter().toFixed(2)}`);

    const myRectangle = new Rectangle(4, 6);
    console.log(`Rectangle Area: ${myRectangle.calculateArea()}`); 
    console.log(`Rectangle Perimeter: ${myRectangle.calculatePerimeter()}`);
} catch (error) {
    console.error(error.message);
}