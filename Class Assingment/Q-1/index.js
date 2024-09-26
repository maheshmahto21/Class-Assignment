// Q1.Define a class with a private member and a public member function to access the private member.

class privateValue {
    #privateValue;
    constructor(pVal){
        this.#privateValue = pVal;
    }

    getPrivateValue (){
        return this.#privateValue
    }
}

let pValue = new privateValue(21);

console.log(pValue.getPrivateValue()) 