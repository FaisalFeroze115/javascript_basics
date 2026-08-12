/**

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

**/  

// one way to solve this is to sort each string

// another way to solve this is to use a hash map, time complexity is O(n * k log k) where n is the number of strings and k is the maximum length of a string, 
// space complexity is O(n * k) since we are storing the strings in a hash map.