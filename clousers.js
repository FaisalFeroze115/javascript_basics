// var num1 = 2

// function sum(){
//     var num2 = 3
//     return function(){
//         return num1 + num2
//     }
// }

// var add = sum() 
// console.dir(add)

// clouser is a function that has access to the parent scope, even after the parent function has closed. In this example, the inner function has access to the variables num1 and num2, even after the sum function has returned. This is because the inner function is a closure that retains a reference to the variables in its parent scope.
// in simple term clouser is function with remembered values

// function balanceSheet(initial_balance){
//     var balance = initial_balance
//     return function(){
//         return balance
//     }
// }
// var account = balanceSheet(10000)
// console.log(account())

// clousers are functions that refer to independent variables (variables that are used locally but defined in a enclosing scope) 


// function stopWatch(){
//     let startTime = Date.now()
//     return function(){
//         return Date.now() - startTime
//     }
// }

// var getTime = stopWatch()

// for(let i =0; i<100000000; i++){
//     var a = Math.random() * i
// }

// console.log(getTime())


// function asyncFunc(){
//     var a = 40
//     setTimeout(()=>{
//         console.log(a)
//     },3000)
// }

// asyncFunc()

// var a

// function asyncFunc(){
//     a = 40
//     setTimeout(()=>{
//         console.log(a)
//     },3000)
// }

// asyncFunc()

// a = 500

// function apiFunction(url){
//     fetch(url).then((res)=>{
//         console.log(res)
//         return res.json(); 
//     }).then((data)=>{
//         console.log(data)
//     })
// }

// apiFunction('https://jsonplaceholder.typicode.com/todos/1')


for(let i =0; i<3; i++){
    setTimeout(()=>{
        console.log(i)
    },3000)
}

for(var i =0; i<3; i++){
    setTimeout(()=>{
        console.log(i)
    },3000)
}