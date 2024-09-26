//Q-3 : Create a class representing a Circle with member functions to calculate its area and circumference

class Circle {
    constructor(radius) {
      this.radius = radius; // Initialize the radius
    }
  
    // Method to calculate the area of the circle
    area() {
      return Math.PI * Math.pow(this.radius, 2); // Area formula: πr²
    }
  
    // Method to calculate the circumference of the circle
    circumference() {
      return 2 * Math.PI * this.radius; // Circumference formula: 2πr
    }
  }
  
  // Usage
  const myCircle = new Circle(5); // Create a circle with radius 5
  
  console.log(`Area: ${myCircle.area()}`); // Outputs: Area: 78.53981633974483
  console.log(`Circumference: ${myCircle.circumference()}`); // Outputs: Circumference: 31.41592653589793
  
  