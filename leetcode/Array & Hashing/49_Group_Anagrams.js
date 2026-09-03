/**

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

**/  



// another way to solve this is to use a hash map, time complexity is O(n * k log k) where n is the number of strings and k is the maximum length of a string, 
// space complexity is O(n * k) since we are storing the strings in a hash map.



let groupAnagrams = function(strs) {

    // let myArr = Array.from({ length: 26 }, () => 0);

    if(!strs || strs.length === 0) return [];

    let myHash = {}
    let ans = []

    for(let i = 0; i < strs.length; i++){

        let myArr = Array(26).fill(0);

        for(let j = 0; j < strs[i].length; j++){
            myArr[strs[i].charCodeAt(j) - 'a'.charCodeAt(0)]++;
        }

        let hashKey = myArr.join(); 

        if(myHash.hasOwnProperty(hashKey)){
            myHash[hashKey].push(strs[i]);
        } else {
            myHash[hashKey] = [strs[i]];
        }

    }


    // for(key in myHash){
    //     ans.push(myHash[key]);
    // }
    // return ans;

    return Object.values(myHash);
}

console.log(groupAnagrams(["bdddddddddd","bbbbbbbbbbc"]))


// // one way to solve this is to sort each string

// function groupAnagrams(strs) {
//     const map = new Map();

//     for (const str of strs) {
//         const key = str.split('').sort().join('');

//         if (!map.has(key)) {
//             map.set(key, []);
//         }

//         map.get(key).push(str);
//     }

//     return Array.from(map.values());
// }

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));