//Q-17 : Create a class representing a Person with member functions to set and display personal details.

class Person {
    constructor(name, age, email) {
        this.setName(name);
        this.setAge(age);
        this.setEmail(email);
    }


    setName(name) {
        if (typeof name === 'string' && name.trim() !== '') {
            this.name = name;
        } else {
            throw new Error("Invalid name");
        }
    }

    setAge(age) {
        if (Number.isInteger(age) && age >= 0) {
            this.age = age;
        } else {
            throw new Error("Invalid age");
        }
    }

    setEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (typeof email === 'string' && emailRegex.test(email)) {
            this.email = email;
        } else {
            throw new Error("Invalid email");
        }
    }

    displayDetails() {
        return `Name: ${this.name}\nAge: ${this.age}\nEmail: ${this.email}`;
    }
}

try {
    const person = new Person("Mhaesh", 22, "mahesh@mahto.com");
    console.log(person.displayDetails());

    // Updating details
    person.setName("Shivam");
    person.setAge(22);
    person.setEmail("shivam@shivam.com");
    console.log(person.displayDetails());
} catch (error) {
    console.error(error.message);
}
