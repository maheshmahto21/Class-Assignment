//Q-12 :  Create a class representing a Product with member functions to set and display product details

class Product {
    constructor(name, price, category) {
        this.setName(name);
        this.setPrice(price);
        this.setCategory(category);
    }


    setName(name) {
        if (typeof name === 'string' && name.trim() !== '') {
            this.name = name;
        } else {
            throw new Error("Invalid product name");
        }
    }


    setPrice(price) {
        if (typeof price === 'number' && price >= 0) {
            this.price = price;
        } else {
            throw new Error("Invalid product price");
        }
    }

    setCategory(category) {
        if (typeof category === 'string' && category.trim() !== '') {
            this.category = category;
        } else {
            throw new Error("Invalid product category");
        }
    }

    displayDetails() {
        return `Product Name: ${this.name}\nPrice: ${this.price.toFixed(2)}\nCategory: ${this.category}`;
    }
}

//output
try {
    const myProduct = new Product('Laptop', 999.99, 'Electronics');
    console.log(myProduct.displayDetails());
    
    myProduct.setName('Gaming Laptop');
    myProduct.setPrice(1299.99);
    console.log(myProduct.displayDetails());
} catch (error) {
    console.error(error.message);
}
