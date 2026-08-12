// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Explanation:
// The element 1 occurs at the indices 0 and 3.

// 1st way to solve this by user brute force method, meaning using 2 foorloops, time complexity is O(n^2) and space complexity is O(1)

// another way to solve this by sorting the array and then checking if any adjacent elements are equal, time complexity is O(n log n) and space complexity is O(1)

// 2nd way to solve this by using a hash set, time complexity is O(n) and space complexity is O(n). this is the most efficient way to solve this problem.




var containsDuplicate = function(nums) {
    let myHash = {}
    for(let i = 0; i < nums.length; i++){
        if(myHash.hasOwnProperty(nums[i])){
            // return [myHash[nums[i]], i]
            return true
        }else{
            myHash[nums[i]] = i
        }
    }
    return false
};

let myQuery = [1,2,3,1]
console.log(containsDuplicate(myQuery)) 