// Q-5 : Implement a class hierarchy for different shapes (e.g., Circle, Square) with a common base class. Calculate their areas


class Shape {
    constructor() {
      if (this.constructor === Shape) {
        throw new Error("Cannot instantiate abstract class Shape");
      }
    }
  
    // Abstract method to calculate area (to be implemented by subclasses)
    area() {
      throw new Error("Method 'area()' must be implemented.");
    }
  }
  
  // Circle class extending Shape
  class Circle extends Shape {
    constructor(radius) {
      super(); // Call the constructor of the base class
      this.radius = radius;
    }
  
    // Override area method
    area() {
      return Math.PI * Math.pow(this.radius, 2); // Area formula: πr²
    }
  }
  
  // Square class extending Shape
  class Square extends Shape {
    constructor(sideLength) {
      super(); // Call the constructor of the base class
      this.sideLength = sideLength;
    }
  
    // Override area method
    area() {
      return Math.pow(this.sideLength, 2); // Area formula: side²
    }
  }
  
  // Usage
  const circle = new Circle(5); // Create a Circle with radius 5
  console.log(`Circle Area: ${circle.area()}`); // Outputs: Circle Area: 78.53981633974483
  
  const square = new Square(4); // Create a Square with side length 4
  console.log(`Square Area: ${square.area()}`); // Outputs: Square Area: 16
  