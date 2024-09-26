// Q-6 : Implement a class representing a Student with a constructor and member functions to set and display student details

class Student {
    constructor(name, age, studentId) {
      this.name = name;        
      this.age = age;          
      this.studentId = studentId;  
    }
  
    setDetails(name, age, studentId) {
      this.name = name; 
      this.age = age; 
      this.studentId = studentId; 
    }
  
  
    displayDetails() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Student ID: ${this.studentId}`);
    }
  }
  
 
  const student1 = new Student("Mahesh", 22, "A207249"); 
  student1.displayDetails();  

  // Update details
  student1.setDetails("Shivam", 22, "A207250");
  console.log("")
  console.log("Updated Details:");
  student1.displayDetails(); // Display updated details
  