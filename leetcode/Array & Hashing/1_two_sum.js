/*****

You are given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

******/


var twoSum = function(nums, target) {

    let myHash = {}

    for(let i = 0; i < nums.length; i++){
        let flag = target - nums[i]
        if(myHash.hasOwnProperty(flag)){
            return [myHash[flag], i]
        }
        myHash[nums[i]] = i
    }
    
};

console.log(twoSum([-3,4,3,90], 0)) // [0,1]

// time complexity is O(n) and space complexity is O(n) since we are using a hash map to store the elements of the array. 


/* 

we can also solve this by sorting and then binary search, but the time complexity will be O(n log n) and space complexity will be O(n) 
since we need to store the original indices of the elements in a hash map.

*/