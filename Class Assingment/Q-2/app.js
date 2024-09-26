// Q-2 : Create a class representing a 2D point and calculate the distance between two points

class Point {
    constructor(x, y) {
        this.x = x; // X coordinate
        this.y = y; // Y coordinate
    }

    distanceTo(otherPoint) {
        const dx = this.x - otherPoint.x;
        const dy = this.y - otherPoint.y; 
        return Math.sqrt(dx * dx + dy * dy);
    }
}

// Usage
const pointA = new Point(3, 4);
const pointB = new Point(6, 8);

const distance = pointA.distanceTo(pointB);
console.log(`Distance between point A and point B: ${distance}`); // Outputs: 5
