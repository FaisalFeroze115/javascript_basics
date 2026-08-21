/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2

Output: [1,2]


*/


function topKFrequent(nums, k) {

    let myHash = {} 

    for(let i = 0; i < nums.length; i++){
        if(myHash.hasOwnProperty(nums[i])){
            myHash[nums[i]]++;
        }else{
            myHash[nums[i]] = 1;
        }
    }

    let myArr = Object.entries(myHash).sort((a, b) => b[1] - a[1]);

    console.log(myArr)

    let ans = [];

    for(let i = 0; i < k; i++){
        ans.push(parseInt(myArr[i][0]));
    }

    return ans;

}

topKFrequent([1,1,1,2,2,3], 2)


   