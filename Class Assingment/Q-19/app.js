//Q-19 :  Implement a class hierarchy for different accounts (e.g., SavingsAccount, CheckingAccount) with a common base class. Calculate their interest

class Account {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    // Common method to be overridden
    calculateInterest() {
        throw new Error("calculateInterest method must be implemented in subclasses");
    }

    // Method to display account details
    displayDetails() {
        return `Account Owner: ${this.owner}\nBalance: ${this.balance.toFixed(2)}`;
    }
}

class SavingsAccount extends Account {
    constructor(owner, balance, interestRate) {
        super(owner, balance);
        this.interestRate = interestRate; 
    }

    calculateInterest() {
        return this.balance * this.interestRate;
    }
}

class CheckingAccount extends Account {
    constructor(owner, balance, overdraftLimit) {
        super(owner, balance);
        this.overdraftLimit = overdraftLimit; 
    }

    calculateInterest() {
        return 0; 
    }
}

try {
    const savings = new SavingsAccount("Mahesh", 1000, 0.05);
    console.log(savings.displayDetails());
    console.log(`Interest Earned: ${savings.calculateInterest().toFixed(2)}`); 

    const checking = new CheckingAccount("Shivam", 500, 200);
    console.log(checking.displayDetails());
    console.log(`Interest Earned: ${checking.calculateInterest().toFixed(2)}`); 

} catch (error) {
    console.error(error.message);
}
