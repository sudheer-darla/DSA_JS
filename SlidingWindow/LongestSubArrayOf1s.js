/*
Given a binary array nums, you should delete one element from it.

Return the size of the longest non-empty subarray containing only 1's in the resulting array. 
Return 0 if there is no such subarray.
*/

var longestSubarray = function (nums) {
  const n = nums.length;
  let maxLength = 0;
  let start = 0;
  let end = 0;
  let numOfZeros = 0;

  while (end < n) {
    if (nums[end] === 0) {
      numOfZeros++;
    }

    while (numOfZeros > 1) {
      if (nums[start] === 0) {
        numOfZeros--;
      }
      start++;
    }

    maxLength = Math.max(maxLength, end - start);

    end++;
  }

  return maxLength;
};

let nums = [0, 1, 1, 1, 0, 1, 1, 0, 1];
console.log(longestSubarray(nums));
