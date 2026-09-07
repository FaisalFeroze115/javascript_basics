 // functional programming is a higher-order functions, which are functions that can take other functions as arguments or return them as results.
 // In JavaScript, functions are first-class citizens, meaning they can be treated like any other value. This allows for powerful abstractions and code reuse.

 function hello(){
    console.log("Hello, World!");
 }

 hello(); // Output: Hello, World!
 hello.language = "English";

 console.log(hello.language); // Output: English

 // function is special type of object, which can be called and executed. It can also have properties and methods, just like any other object.

   //example: 1

var numbers = [1,2,3,4,5]

var double = numbers.map(function(num){
    return num * 2
})     

console.log(double) // Output: [2, 4, 6, 8, 10]

//example: 2, my own map function

function myMap(arr, fn){
    let result_arr = [] 
    for(let i = 0; i < arr.length; i++){
        result_arr.push(fn(arr[i]))
    }
    return result_arr
}

const languages = ["JavaScript", "Python", "Java", "C++"];

const uppercasedLanguages = myMap(languages, function(language) {
  return language.toUpperCase();
});

console.log(uppercasedLanguages); // Output: ["JAVASCRIPT", "PYTHON", "JAVA", "C++"]
