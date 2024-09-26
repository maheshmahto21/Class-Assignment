//Q-20 : Implement a class representing a Computer with member functions to set and display computer details 

class Computer {
    constructor(brand, model, ram, storage) {
        this.setBrand(brand);
        this.setModel(model);
        this.setRam(ram);
        this.setStorage(storage);
    }

    setBrand(brand) {
        if (typeof brand === 'string' && brand.trim() !== '') {
            this.brand = brand;
        } else {
            throw new Error("Invalid brand");
        }
    }

    setModel(model) {
        if (typeof model === 'string' && model.trim() !== '') {
            this.model = model;
        } else {
            throw new Error("Invalid model");
        }
    }

    setRam(ram) {
        if (typeof ram === 'number' && ram > 0) {
            this.ram = ram; // in GB
        } else {
            throw new Error("Invalid RAM value");
        }
    }


    setStorage(storage) {
        if (typeof storage === 'number' && storage > 0) {
            this.storage = storage; // in GB
        } else {
            throw new Error("Invalid storage value");
        }
    }

    displayDetails() {
        return `Brand: ${this.brand}\nModel: ${this.model}\nRAM: ${this.ram} GB\nStorage: ${this.storage} GB`;
    }
}


try {
    const myComputer = new Computer("Apple", "MacBook Pro", 16, 512);
    console.log(myComputer.displayDetails());

    // Updating details
    myComputer.setBrand("Dell");
    myComputer.setModel("XPS 15");
    myComputer.setRam(32);
    myComputer.setStorage(1000);
    console.log(myComputer.displayDetails());
} catch (error) {
    console.error(error.message);
}
