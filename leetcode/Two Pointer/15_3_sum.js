/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

*/ 

// n2 + nlogn

// with hash map
function threeSum(nums) {
    let result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        let seen = new Set();

        for (let j = i + 1; j < nums.length; j++) {
            let required = -(nums[i] + nums[j]);

            if (seen.has(required)) {
                let triplet = [nums[i], nums[j], required];
                triplet.sort((a, b) => a - b);

                // Avoid duplicate triplets
                let key = triplet.join(",");

                if (!result.some(item => item.join(",") === key)) {
                    result.push(triplet);
                }
            }

            seen.add(nums[j]);
        }
    }

    return result;
}

// with two ponters

function threeSum(nums) {
    let result = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {

        // Skip duplicate first numbers
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {

            let sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([
                    nums[i],
                    nums[left],
                    nums[right]
                ]);

                // Skip duplicates
                while (
                    left < right &&
                    nums[left] === nums[left + 1]
                ) {
                    left++;
                }

                while (
                    left < right &&
                    nums[right] === nums[right - 1]
                ) {
                    right--;
                }

                left++;
                right--;

            } else if (sum < 0) {
                left++;

            } else {
                right--;
            }
        }
    }

    return result;
}