// currying is a pattern in functional programming where a function with multiple arguments is transformed into a sequence of functions, 
// each taking a single argument. This allows for partial application of functions and can lead to more reusable and composable code.

// function multiply(a,b,c){
//     return a * b * c
// }

// console.log(multiply(2,3,4)) // Output: 24


// // curried version of multiply function

// function curriedMultiply(a){
//     return function(b){
//         return function(c){
//             return a * b * c
//         }
//     }   
// }

// const curried = curriedMultiply(2)
// const curried2 = curried(3)
// const result = curried2(4)
// console.log(result) // Output: 24

// // or we can do it in one line
// const result2 = curriedMultiply(2)(3)(4)
// console.log(result2) // Output: 24

// // we can also use arrow function to make it more concise

// const curriedMultiplyArrow = a => b => c => a * b * c

// const result3 = curriedMultiplyArrow(2)(3)(4)
// console.log(result3) // Output: 24
 

// function discount(price, discount){
//     return price - (price * discount)
// }

// console.log(discount(100, 0.1)) // Output: 90

// curried version of discount function

// function curriedDiscount(price){
//     return function(discount){
//         return price - (price * discount)
//     }
// }

// const curriedDiscountPrice = curriedDiscount(100)
// const finalPrice = curriedDiscountPrice(0.1)
// console.log(finalPrice) // Output: 90

// // or we can do it in one line
// const finalPrice2 = curriedDiscount(100)(0.1)
// console.log(finalPrice2) // Output: 90

// function curriedDiscount(discount){
//     return function(price){
//         return price - (price * discount)
//     }
// }

// let tenPercentDiscount = curriedDiscount(0.1) //partial functiton
// let finalPrice = tenPercentDiscount(100)
// console.log(finalPrice) // Output: 90

// let twentyPercentDiscount = curriedDiscount(0.2)
// let finalPrice2 = twentyPercentDiscount(100)
// console.log(finalPrice2) // Output: 80


// partial application is a technique in functional programming where a function is called with fewer arguments than it expects,
// and returns a new function that takes the remaining arguments. This allows for the creation of specialized functions from more general ones.


// curry converter function

function curryConverter(fn){
    return function curried(...args){
        if(args.length >= fn.length){
            return fn.apply(this, args)
        }else{
            return function(...args2){
                return curried.apply(this, args.concat(args2))
            }
        }
        
    }
}

function sum(a,b,c){
    return a + b + c
}

let curriedSum = curryConverter(sum) 

console.log(curriedSum(1)(2)(3)) // Output: 6
console.log(curriedSum(1,2)(3)) // Output: 6
console.log(curriedSum(1)(2,3)) // Output: 6
console.log(curriedSum(1,2,3)) // Output: 6

