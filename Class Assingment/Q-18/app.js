//Q-18 : Create a class representing a Vehicle with member functions to set and display vehicle details

class Vehicle {
    constructor(make, model, year) {
        this.setMake(make);
        this.setModel(model);
        this.setYear(year);
    }

    setMake(make) {
        if (typeof make === 'string' && make.trim() !== '') {
            this.make = make;
        } else {
            throw new Error("Invalid make");
        }
    }


    setModel(model) {
        if (typeof model === 'string' && model.trim() !== '') {
            this.model = model;
        } else {
            throw new Error("Invalid model");
        }
    }

    setYear(year) {
        if (Number.isInteger(year) && year > 1885 && year <= new Date().getFullYear()) {
            this.year = year;
        } else {
            throw new Error("Invalid year");
        }
    }

    displayDetails() {
        return `Make: ${this.make}\nModel: ${this.model}\nYear: ${this.year}`;
    }
}


try {
    const myVehicle = new Vehicle("Tata", "Harrier", 2024);
    console.log(myVehicle.displayDetails());

    // Updating details
    myVehicle.setMake("Honda");
    myVehicle.setModel("Accord");
    myVehicle.setYear(2023);
    console.log(myVehicle.displayDetails());
} catch (error) {
    console.error(error.message);
}
