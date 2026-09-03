/**

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]


 */

let nums = [1,2,3,4]
let ans = []
let product = 1

// for(let i = 0; i < nums.length; i++){

//     for(let j = 0; j < nums.length; j++){
//         if(i !== j){
//             // Calculate product
//             product *= nums[j]
//         }
//     }
//     ans.push(product)
//     product = 1
// }

// console.log(ans)
// console.log("ewfefef")

// for(let i = 0; i < nums.length; i++){
//     product *= nums[i]
// }

// console.log(product)

// for(let j = 0; j < nums.length; j++){
//     ans.push(product / nums[j])
// }
// console.log(ans)


/*
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

pre = [1, 1, 2, 6]
post = [1, 4, 12, 24]

*/

// best solution
var productExceptSelf = function(nums) {

    let prefix= [] 
    let postfix = []
    let ans = []

    for(let i=0; i<nums.length; i++){
        if(i == 0){
            prefix.push(1)
        }else{
            prefix.push(nums[i-1] * prefix[i-1])
        }
    }


    for(let j=nums.length -1; j>=0; j--){
        if(j == nums.length -1){
            postfix.push(1)
        }else{
            postfix.push(nums[j+1] * postfix[nums.length - j - 2])
        }
    }


    for(let k=0; k<nums.length; k++){
        ans.push(prefix[k] * postfix[nums.length - k - 1])
    }

    return ans
    
};

// time complexity is O(n) and space complexity is O(n) because we are using two extra arrays prefix and postfix.

// there is a better solution with time complexity O(n) and space complexity O(1) because we are not using any extra space.

var productExceptSelf = function(nums) {
    let ans = []
    let product = 1

    for(let i=0; i<nums.length; i++){
        if(i == 0){
            ans.push(1)
        }else{
            product *= nums[i-1]
            ans.push(product)
        }
    }

    product = 1

    for(let j=nums.length -1; j>=0; j--){
        if(j == nums.length -1){
            ans[j] *= 1
        }else{
            product *= nums[j+1]
            ans[j] *= product
        }
    }

    return ans
};