// javascript is a prototype based language

// const personMethod = {
//     eat(){
//         console.log('Person is eating')
//     },
//     sleep(){
//         console.log('person is sleeping')
//     }
// }

// function Person(name,age){
//     let person = {}

//     person.name = name
//     person.age = age

//     person.eat = personMethod.eat
//     person.sleep = personMethod.sleep

//     return person
// }

// function perfectPerson(name,age){
//     let person = Object.create(personMethod)

//     person.name = name
//     person.age =  age

//     return person
// }

// let sakib = Person('Sakib', 38)

// let tamim = perfectPerson('Tamim', 39)
// tamim.eat()
// working because of prototype



// const captain = {
//     name: 'Mash',
//     age: 43,
//     country: "Bangladesh"
// }

// const player = Object.create(captain)

// console.log(player)
// console.log(player.name)
// console.log(player.age)
// console.log(player.country)

// function test(){}

// console.log(test.prototype)

// prototype is nothing but a function's property who points to an object
// inhertis parent's property into child with prototype


// function perfectPerson(name,age){
//     let person = Object.create(perfectPerson.prototype)

//     person.name = name
//     person.age =  age

//     return person
// }

// perfectPerson.prototype = {
//     eat(){
//         console.log('Person is eating')
//     },
//     sleep(){
//         console.log('person is sleeping')
//     }
// }

// in js the convention of a construction function is to write in camelcase


// let sakib = Person('Sakib', 38)
// let sakib = new Person('Sakib', 38)
// if we create with new then we dont have to write Object.create(perfectPerson.prototype) and we dont need to return 

// proper version

// function Person(name, age){
//     this.name = name
//     this.age = age
// } 

// Person.prototype = {
//     eat(){
//         console.log(`${this.name} is eating`)
//     },
//     sleep(){
//         console.log(`${this.name} is sleeping`)
//     }
// }

// let sakib = new Person("Sakib", 39)
// console.log(sakib.eat())

// introducing class

// class Person{
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }

//     eat(){
//         console.log(`${this.name} is eating`)
//     }

//     sleep(){
//         console.log(`${this.name} is sleeping`)
//     }
// }
// let sakib = new Person("Sakib", 39)
// console.log(sakib.eat())

// using prototype js bring the clss concept


// prototype chain - __proto__ 
// Object.prototype.faisal = function(){
//     console.log("I am Faisal")
// }
// let p = {}
// p.faisal()


// introducing inheritance

// function Person(name, age){ // parent class
//     this.name = name
//     this.age = age
// } 

// Person.prototype = {
    // eat(){
    //     console.log("Person is eating")
    // }
// }

// function Cricketer(name, age, type, country){ // sub class
//     Person.call(this)
//     this.type = type
//     this.country = country
    // this.name = name
    // this.age = age
// }

// Cricketer.prototype = Object.create(Person.prototype)
// Cricketer.prototype.constructor = Cricketer


// let sakib = new Person("Sakib", 39, "All", 'BD')


// now lets see how class works

class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    eat(){
        console.log(this.name + " is eating")
    }

    get myName(){
        return this.name
    }

    set setName(name){
        this.name = name
    }

    static isEqualAge(){
        console.log('I am static')
    }
}

class Cricketer extends Person{
    constructor(name, age, type, country){
        super(name, age)
        this.name = name
        this.age = age
        this.type = type
        this.country = country
    }

    play(){
        console.log(this.name + " is playing")
    }

    eat(){
        super.eat() // calling parent's method
        console.log(this.name + " is eating a lotttttttttttt.") // then overwritting the method
    }
}

// let sakib = new Cricketer("Sakib", 39, "All", 'BD')
// console.log(sakib.name)
// console.log(sakib.country)
// console.log(sakib.eat())

// by extends child is connecting to parent's method and by calling super child is initiating or calling parent's constructor

// getter and setter

// getter will look like method but will behave like property, to call we dont need to add the (). we have to call like .myName
// setter is also like getting, used to change any property

// let tanim = new Person('Tanim', 39)
// console.log(tanim.myName)
// tanim.setName = "Feroze" // we cannot do like tanim.setName('Feroze')
// console.log(tanim.myName)


// static method
// to call static method we dont need to create object

// Person.isEqualAge() // we dont need to create obj like let a = new Person the a.isEqualAge

// in static method it dont recognize this, here this means that Person object only

// polymorphism
// if any child class modifies something of parent class this concept is polymorphism

let sakib = new Cricketer("Sakib", 39, "All", 'BD')
console.log(sakib.eat()) // polymorphism

