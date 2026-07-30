// const language = {
//     name: "JavaScript",
//     type: "Programming Language",
//     year: 1995,
//     creator: "Brendan Eich"
// }

// const a = "popularity"

// language[a] = "High"

// console.log(language)



// console.log(Object.keys(language))
// console.log(Object.values(language))
// console.log(Object.entries(language))

//spread n rest operator

// const fruits = ['apple', 'banana', 'orange']
// const newFruits = [...fruits]
// perfect copty

// const fruits = [
//     {
//         name: 'apple',
//     },
//     {
//         name: 'banana',
//     }
// ]
// const newFruits = [...fruits]
// // not a perfect copy, because it is a reference value, so if we change the original array, the new array will also change
// console.log(newFruits)
// fruits.push({name: 'orange'})
// console.log(newFruits)


// function sum(...numbers){
//     console.log(numbers)
//     return numbers.reduce((total, num) => total + num, 0)
// }

// sum(4,6,3,5)


// function sum(text, ...numbers){
//     let result = numbers.reduce((total, num) => total + num, 0)
//     console.log(text + result)
// }

// sum('The sum is: ',4,6,3,5)

// 6 Falsy values 
// false, 0, undefined, null, NaN, ''

// ternary operation
// const result = condition ? valueIfTrue : valueIfFalse    
// const age = 18
// const result = age >= 18 ? "You are an adult" : "You are a minor"
// const result2 = age%2 === 0 ? "Even" : "Odd"

// console.log(result)
// console.log(result2)


// destructuring
// const person = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// }

// const {name, age, city} = person

// console.log(name)
// console.log(age)
// console.log(city)

const user = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    education:{
        degree: 'Bachelor of Science',
        major: 'Computer Science',
        university: {
            uni_name: 'University of Example',
            location: 'Example City'
        }
    }
}

// const {id, name, email, education: {degree, major, university: {uni_name}={}}={}} = user

// console.log(name)

//optional chaining
console.log(user.education?.university?.uni_name) // Output: University of Example

//nullish coalescing operator
// nullish = null or undefined

let a = null
let b = a ?? 'default value'

console.log(b) // Output: default value

let lang = false
console.log(lang ?? 'default value') // Output: false, because false is not null or undefined
console.log(lang || 'default value') // Output: default value, because false is falsy
console.log(lang && 'default value') // Output: false, because false is falsy, so the && operator returns the first falsy value
// short circuiting conditional operator

