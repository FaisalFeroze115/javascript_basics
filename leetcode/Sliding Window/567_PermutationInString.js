/*

Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

 

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false
 

Constraints:

1 <= s1.length, s2.length <= 104
s1 and s2 consist of lowercase English letters.

*/



function checkInclusion(s1, s2) {
    if (s1.length > s2.length) {
        return false;
    }

    const count1 = new Array(26).fill(0);
    const count2 = new Array(26).fill(0);

    // Count characters in s1
    for (let i = 0; i < s1.length; i++) {
        count1[s1.charCodeAt(i) - 97]++;
    }

    let left = 0;

    for (let right = 0; right < s2.length; right++) {

        // Add current character to window
        count2[s2.charCodeAt(right) - 97]++;

        // Keep window size equal to s1.length
        if (right - left + 1 > s1.length) {
            count2[s2.charCodeAt(left) - 97]--;
            left++;
        }

        // Check if window is a permutation of s1
        if (right - left + 1 === s1.length) {
            if (count1.join("") === count2.join("")) {
                return true;
            }
        }
    }

    return false;
}