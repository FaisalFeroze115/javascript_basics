/*

Given a string s, find the length of the longest substring without duplicate characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


 */

var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let right = 0;

    let set = new Set();
    let maxLength = 0;

    while (right < s.length) {

        if (!set.has(s[right])) {
            // No duplicate, expand the window
            set.add(s[right]);

            right++;

            maxLength = Math.max(
                maxLength,
                right - left
            );

        } else {
            // Duplicate found, shrink from left
            set.delete(s[left]);
            left++;
        }
    }

    return maxLength;
};

// var lengthOfLongestSubstring = function(s) {
//     let left = 0;
//     let maxLength = 0;

//     let set = new Set();

//     for (let right = 0; right < s.length; right++) {

//         // Duplicate found
//         while (set.has(s[right])) {
//             set.delete(s[left]);
//             left++;
//         }

//         // Add current character
//         set.add(s[right]);

//         // Calculate window length
//         maxLength = Math.max(maxLength, right - left + 1);
//     }

//     return maxLength;
// };