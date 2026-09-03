/*
You are given a list of strings, for example:

["lint", "code", "love", "you"]

Design two functions:

encode(strs)
decode(s)

encode should take a list of strings and return one encoded string.
decode should take that encoded string and return the original list of strings.

Example

Input:

["lint", "code", "love", "you"]

After encoding:

"4#lint4#code4#love3#you"

After decoding:

["lint", "code", "love", "you"]



*/

//length + "#" + string
// ["lint", "code", "love", "you"]
// "4#lint4#code4#love3#you"

var encode = function(strs) {
    let result = "";

    for (let str of strs) {
        result += str.length + "#" + str;
    }

    return result;
};


var decode = function(s) {
    let result = [];
    let i = 0;

    while (i < s.length) {
        // Find the '#' that separates length and string
        let j = i;

        while (s[j] !== "#") {
            j++;
        }

        // Get the length of the string
        let length = Number(s.slice(i, j));

        // Move past '#'
        j++;

        // Extract the actual string
        let str = s.slice(j, j + length);

        result.push(str);

        // Move i to the beginning of the next encoded string
        i = j + length;
    }

    return result;
};