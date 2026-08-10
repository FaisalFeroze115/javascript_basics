// a map holds keys and values, where keys can be any type and values can be any type

const fruits = new Map(
    [['apple', 5], ['banana', 3], ['orange', 8]]
);

fruits.set('grapes', 10); // adding a new key-value pair

console.log(fruits.get('banana'));
console.log(fruits);

fruits.get('apple'); // returns 5

fruits.delete('orange'); // removes the key-value pair with key 'orange'

fruits.has('grapes'); // returns true

fruits.size; // returns 3

// Map is iterable, so we can use for...of loop to iterate over the key-value pairs

fruits.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});

// Output:
// apple: 5
// banana: 3
// grapes: 10


fruits.entries(); // returns an iterator of key-value pairs

fruits.clear(); // removes all key-value pairs from the map

