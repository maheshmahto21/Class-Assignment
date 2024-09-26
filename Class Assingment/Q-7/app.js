//Q-7 : Create a class representing a Book with member functions to set and display book details..

class book {
    constructor(title , author , publishedYear){
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
    }

    setDetails(title , author , publishedYear){
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
    }
    displayDetails(){
        console.log(`Title : ${this.title}`);
        console.log(`Author : ${this.author}`);
        console.log(`Published year : ${this.publishedYear}`);
    }
}


let newBook = new book ("The Great Gatsby " , " F. Scott Fitzgerald" , 1925);

newBook.displayDetails();