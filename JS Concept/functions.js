// regular function
// function add(a, b){
//     return a + b;
// } 

// function expression
var add = function(a, b){
    return a + b;
}

//named function expression
// var add = function sum(a, b){
//     return a + b;
// }

// arrow function
// var add = (a, b) => {
//     return a + b;
// }

// shortest arrow function
// var add = (a, b) => a + b;

// anonymous function
function hello(){
    return () => {
        console.log("Hello World");
    }
}

console.log(add(2, 3))