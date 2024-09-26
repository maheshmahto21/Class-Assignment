//Q-15 : Implement a class hierarchy for different employees (e.g., Manager, Programmer) with a common base class. Calculate their salaries

class Employee {
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }


    calculateSalary() {
        throw new Error("This method should be overridden in subclasses");
    }
}

class Manager extends Employee {
    constructor(name, baseSalary, bonus) {
        super(name, baseSalary);
        this.bonus = bonus;
    }

    calculateSalary() {
        return this.baseSalary + this.bonus;
    }
}

class Programmer extends Employee {
    constructor(name, baseSalary, overtimeHours, overtimeRate) {
        super(name, baseSalary);
        this.overtimeHours = overtimeHours;
        this.overtimeRate = overtimeRate;
    }

    calculateSalary() {
        const overtimePay = this.overtimeHours * this.overtimeRate;
        return this.baseSalary + overtimePay;
    }
}


const manager = new Manager("Mahesh", 80000, 10000);
const programmer = new Programmer("Shivam", 60000, 10, 50);

console.log(`${manager.name}'s Salary: ${manager.calculateSalary()}`); 
console.log(`${programmer.name}'s Salary: ${programmer.calculateSalary()}`); 