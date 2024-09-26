//Q-13 : Implement a class hierarchy for different animals (e.g., Cat, Dog) with a common base class. Display their sounds

class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        throw new Error("This method should be overridden in subclasses");
    }
}


class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    makeSound() {
        return `${this.name} says: Woof!`;
    }
}

// Output

const myDog = new Dog('Boxer');
console.log(myDog.makeSound()); // Output: Buddy says: Woof!
