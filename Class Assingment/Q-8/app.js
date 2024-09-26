//Q-8: Create a class representing a Rectangle with member functions to calculate its area and perimeter

class rectAngle {
    constructor(width , height){
        this.width = width;
        this.height = height;
    }

    areaOfRectangle(width , height){
        return this.width * this.height
    }

    parameter(){
        return 2 * (this.width + this.height)
    }

    diplayDetails(){
        console.log(`Width : ${this.width}`)
        console.log(`Height : ${this.height}`)
        console.log(`Area : ${this.areaOfRectangle()}`)
        console.log(`Parameter : ${this.parameter()}`)
    }
}

let rectangle = new rectAngle(2,4)


rectangle.diplayDetails();

