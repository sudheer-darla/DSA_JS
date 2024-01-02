/*
You are a professional robber planning to rob houses along a street. 
Each house has a certain amount of money stashed, 
the only constraint stopping you from robbing each of them is 
that adjacent houses have security systems connected and it will automatically contact the police 
if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, 
return the maximum amount of money you can rob tonight without alerting the police.

https://leetcode.com/problems/house-robber/description/?envType=study-plan-v2&envId=leetcode-75 
*/
function maxRobbed(nums) {
  const n = nums.length;
  // Base cases
  if (n <= 2) return Math.max(...nums);
  if (n === 3) return Math.max(nums[1], nums[0] + nums[2]);

  // Calculate the possible amounts iteratively
  let maxPossible_DP_arr = [nums[0], nums[1], nums[0] + nums[2]];

  for (let i = 3; i < n; i++) {
    maxPossible_DP_arr.push(
      nums[i] + Math.max(maxPossible_DP_arr[i - 2], maxPossible_DP_arr[i - 3])
    );
  }

  // Answer lies in the last two values
  return Math.max(maxPossible_DP_arr[n - 2], maxPossible_DP_arr[n - 1]);
}

console.log(maxRobbed([2, 7, 9, 3, 1]));
console.log(maxRobbed([1, 1, 1]));
console.log(maxRobbed([2, 1, 1, 2]));
