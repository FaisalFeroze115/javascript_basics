// 4 rules of this in js
// implicit binding
// explicit binding
// new binding
// window binding


// implicit binding

// var sakib = {
//     name: "Sakib",
//     age: 40,
//     printPlayerName: function(){
//         console.log(this.name)
//     }
// }
// sakib.printPlayerName()

// the object who is calling the function that is this, in this case this is sakib object cause it is calling the function
// exception: only work for normal function, will not work for arrow function
 
// printPlayerNameFunction = function(obj){
//     obj.printPlayerName = function(){
//         console.log(this.name)
//     }
// }

// var sakib = {
//     name: "Sakib",
//     age: 35
// }

// var tamim = {
//     name: "Tamim",
//     age: 39
// }

// printPlayerNameFunction(sakib)
// printPlayerNameFunction(tamim)

// console.log(sakib.printPlayerName())
// console.log(tamim.printPlayerName())

// var Person = function(name,age){
//     return{
//         name,
//         age,
//         printName: function(){
//             console.log(this.name)
//         }
//     }
// }

// var sakib = Person("Sakib", 33)
// sakib.printName()


// var Person = function(name,age){
//     return{
//         name,
//         age,
//         printName: function(){
//             console.log(this.name)
//         },
//         father:{
//             name: "M",
//             printName: function(){
//                 console.log(this.name)
//             },
//         }
//     }
// }

// var sakib = Person("Sakib", 33)
// sakib.printName()
// sakib.father.printName()


// explicit binding

// var printPlayerName = function(v1, v2, v3){
//         console.log(this.name + " is " + v1 + v2 + v3)
//     }

// var sakib = {
//     name: "Sakib",
//     age: 40,
// }

// var v1 = "Handsome"
// var v2 = "All Rounder"
// var v3 = "Best Player"

// var v = [v1, v2, v3]

// printPlayerName.call(sakib,v1,v2,v3)
// // .call(which object is this, para1, para2 ...)

// printPlayerName.apply(sakib,v)
// // .call(which object is this, [array of params])

// var newFunc = printPlayerName.bind(sakib,v1,v2,v3)
// newFunc()
// // .bind is same to .call, only difference is it does not call the function directly it only return the function reference


// new binding

// function Person(name, age){
//     // let this = Object.create(null)
//     this.name = name
//     this.age = age

//     console.log(this.name + " " + this.age)
//     // return this
// }

// var sakib = new Person("Sakib", 33)

// window binding

// var PrintName = function(){
//     console.log(this.name)
// }

// var sakib = {
//     name: "Sakib"
// }

// PrintName()

// in this case this is window object, in node js it is global object
// to avoid is behaviour we use "use strict"

"use strict"

var PrintName = function(){
    console.log(this.name)
}

var sakib = {
    name: "Sakib"
}

PrintName()

// for arrow function this is always window object

