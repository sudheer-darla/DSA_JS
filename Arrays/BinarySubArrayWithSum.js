/*
Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.
A subarray is a contiguous part of the array. 

Example 1:
Input: nums = [1,0,1,0,1], goal = 2
Output: 4
Explanation: The 4 subarrays are bolded and underlined below:
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]

Example 2:
Input: nums = [0,0,0,0,0], goal = 0
Output: 15

Constraints:
1 <= nums.length <= 3 * 104
nums[i] is either 0 or 1.
0 <= goal <= nums.length

https://leetcode.com/problems/binary-subarrays-with-sum/description/?envType=daily-question&envId=2024-03-14 
*/

/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  let ans = new Map();
  ans.set(0, 1);
  let currSum = 0;
  let totalSubarrays = 0;

  for (let num of nums) {
    currSum += num;
    if (ans.has(currSum - goal)) {
      totalSubarrays += ans.get(currSum - goal);
    }
    ans.set(currSum, (ans.get(currSum) || 0) + 1);
  }

  return totalSubarrays;
};

console.log(numSubarraysWithSum([0,0,0,0,0], 0));
console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2));
