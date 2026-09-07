// class Player{
//     #position
//     constructor(name, age, position){
//         this.name = name;
//         this.age = age;
//         this.#position = position;
//     }

//     getDetails(){
//         return `Name: ${this.name}, Age: ${this.age}, Position: ${this.#position}`;
//     }               
// }

// const player1 = new Player("John Doe", 25, "Forward");
// console.log(player1.getDetails()); // Output: Name: John Doe, Age: 25, Position: Forward
// console.log(player1.name); // Output: John Doe
// console.log(player1.age); // Output: 25
// console.log(player1.#position); // Output: ERROR: Private field '#position' must be declared in an enclosing class

// #position is a private field, which means it cannot be accessed directly from outside the class. This is an example of encapsulation, 
// where the internal state of the object is hidden and can only be accessed through defined methods (like getDetails).


// 4 pillars of oop 
// Encapsulation
// Inheritance
// Polymorphism
// Abstraction

// Encapsulation is the concept of bundling data (attributes) and methods (functions) that operate on the data into a single unit, which is the class.


class Player {
    #name
    #age
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    getName() {
        return this.#name;
    }

    getAge() {
        return this.#age;
    }   

    getPlayerDetails() {
        return `Name: ${this.#name} is ${this.#age} years old`;
    }
}

class Cricketer extends Player {
    #centuries
    constructor(name, age, centuries) {
        super(name, age);
        this.#centuries = centuries;
    }

    getPlayerDetails() {
        // overriding the method from the parent class
        return `this is comming from Cricketer: Name: ${this.getName()} is ${this.getAge()} years old`;
    }
}

class Footballer extends Player {
    #goals
    constructor(name, age, goals) {
        super(name, age);
        this.#goals = goals;
    }
}

const cricketer1 = new Cricketer("Sachin Tendulkar", 47, 100);
console.log(cricketer1.getPlayerDetails()); // Output: Name: Sachin Tendulkar is 47 years old

const footballer1 = new Footballer("Lionel Messi", 34, 700);
console.log(footballer1.getPlayerDetails()); // Output: Name: Lionel Messi is 34 years old

// Inheritance is a mechanism where one class can inherit properties and methods from another class. In this example, 
// Cricketer and Footballer classes inherit from the Player class, allowing them to reuse the getPlayerDetails method.


class BetterArray{
    #items
    constructor(){
        this.#items = []
    }
    getItems(){
        return [...this.#items]
    }
    addItem(item){
        this.#items.push(item)
    }
    removeItem(item){
        this.#items = this.#items.filter(i => i !== item)
    }   
    modifyItem(oldItem, newItem){
        const index = this.#items.indexOf(oldItem)
        if(index !== -1){
            this.#items[index] = newItem
        }
    }   
}

const myArray = new BetterArray()
myArray.addItem('apple')
myArray.addItem('banana')
console.log(myArray.getItems()) // ['apple', 'banana']
myArray.modifyItem('banana', 'orange')
console.log(myArray.getItems()) // ['apple', 'orange']
myArray.removeItem('apple')
console.log(myArray.getItems()) // ['orange']

// In this example, the BetterArray class encapsulates an array and provides methods to manipulate it. The internal state of the array is hidden from the outside, 
// and can only be accessed or modified through the defined methods.
// Abstraction is the concept of hiding the complex implementation details and showing only the essential features of an object. In this example,
// the BetterArray class provides a simple interface to interact with the array without exposing its internal workings.


// Polymorphism is the ability of different classes to be treated as instances of the same class through a common interface.
// same function name but different implementation in different classes. In this example, the getPlayerDetails method is overridden in the Cricketer class 
// to provide a different implementation than the one in the Player class.

 