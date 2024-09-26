// Q-4 :  Implement a class for a simple Bank Account with deposit and withdraw functions.


class BankAccount {
    constructor(initialBalance = 0) {
      this.balance = initialBalance; // Initialize account balance
    }
  
    // Method to deposit money
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount; // Add amount to balance
        console.log(`Deposited: ${amount} New balance: ${this.balance}`);
      } else {
        console.log('Deposit amount must be positive.');
      }
    }
  
    // Method to withdraw money
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount; // Subtract amount from balance
        console.log(`Withdraw: ${amount} New balance: ${this.balance}`);
      } else {
        console.log('Invalid withdrawal amount');
      }
    }
  
    // Method to check the current balance
    getBalance() {
      return this.balance; // Return the current balance
    }
  }
  
  // Usage
  const myAccount = new BankAccount(); // Create an account with an initial balance of $100
  
  myAccount.deposit(5000); // Deposit 5000
  myAccount.withdraw(3000); // Withdraw 3000
  console.log(`Current Balance: ${myAccount.getBalance()}`); // Outputs: Current Balance: $120
  