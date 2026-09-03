// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// Brute force method, meaning using 2 for loops, time complexity is O(n^2) and space complexity is O(1)


// another way is to use an array,

// const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
//  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
// const arr = Array.from({ length: 26 }, () => 0);


var isAnagram = function(s, t) {
    if(s.length !== t.length) {
        return false;
    }

    const charCount = Array(26).fill(0)

    for(let i = 0; i < s.length; i++){
        charCount[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        charCount[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    for(let i = 0; i < 26; i++){
        if(charCount[i] !== 0){
            return false;
        }
    }
    return true;
};


// the time complexity of this solution is O(n) and the space complexity is O(1) since the size of the charCount array is fixed at 26 regardless of the input size.



// another way is to use a hash map, time complexity is O(n) and space complexity is O(n)

var isAnagram = function(s, t) {
    if(s.length !== t.length) {
        return false;
    }

    const charCount = {}

    for(let i = 0; i < s.length; i++){
        charCount[s[i]] = (charCount[s[i]] || 0) + 1;
        charCount[t[i]] = (charCount[t[i]] || 0) - 1;
    }

    for(let key in charCount){
        if(charCount[key] !== 0){
            return false;
        }
    }
    return true;
};
