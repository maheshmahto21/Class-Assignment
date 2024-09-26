//Q- 9 :  Implement a class representing a Bank with member functions to add and display account details

class Account {
    constructor(accountNumber, accountHolder, balance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    displayDetails() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Account Holder: ${this.accountHolder}`);
        console.log(`Balance: ${this.balance.toFixed(2)}`);
    }
}

class Bank {
    constructor() {
        this.accounts = [];
    }

    addAccount(accountNumber, accountHolder, balance) {
        const newAccount = new Account(accountNumber, accountHolder, balance);
        this.accounts.push(newAccount);
        console.log(`Account for ${accountHolder} added successfully.`);
    }


    displayAccounts() {
        if (this.accounts.length === 0) {
            console.log("No accounts available.");
            return;
        }
        
        console.log("Account Details:");
        this.accounts.forEach(account => account.displayDetails());
    }
}

const myBank = new Bank();
myBank.addAccount('123456789', 'Mahesh Mahto', 1000);

myBank.displayAccounts();
