// sets are collections of unique values, meaning that a value can only occur once in a set. Sets are useful for storing data 
// that should not contain duplicates, such as a list of unique items or identifiers. In JavaScript, sets are implemented using the Set object, 
// which provides methods for adding, deleting, and checking for the presence of values.

const uniqueNumbers = new Set([1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 9]);

console.log(uniqueNumbers); // Output: Set(9) { 1, 2, 3, 4, 5, 6, 7, 8, 9 }

uniqueNumbers.add(10);

uniqueNumbers.delete(5);

console.log(uniqueNumbers.has(3)); // Output: true

console.log(uniqueNumbers.size); // Output: 9

uniqueNumbers.forEach((value) => {
    console.log(value);
});

// Output:
// 1
// 2
// 3
// 4
// 6
// 7
// 8
// 9
// 10

console.log(uniqueNumbers.entries()); // returns an iterator of values in the set

console.log(uniqueNumbers.values()); // returns an iterator of values in the set

// uniqueNumbers.clear(); // removes all values from the set

// console.log(uniqueNumbers); // Output: Set(0) {}    
