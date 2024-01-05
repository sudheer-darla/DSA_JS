// Given an integer array nums, return the length of the longest strictly increasing subsequence

function lengthOfLIS(nums) {
  if (nums.length === 0) {
    return 0;
  }

  const dp = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j] && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
      }
    }
  }

  return Math.max(...dp);
}

/*
Explanation:

dp is an array where dp[i] represents the length of the LIS ending at index i.

Initialize dp with all values set to 1 since the minimum length of an LIS is 1.

Iterate over the array. 
For each element at index i, compare it with all previous elements (indexes j from 0 to i-1). 
If nums[i] is greater than nums[j], and dp[i] is less than dp[j] + 1, update dp[i] with dp[j] + 1.

Finally, return the maximum value in the dp array, 
which represents the length of the longest increasing subsequence.
*/
const A = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(A));
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]));
