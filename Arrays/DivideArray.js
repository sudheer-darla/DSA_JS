/*
You are given an integer array nums of size n and a positive integer k.

Divide the array into one or more arrays of size 3 satisfying the following conditions:

Each element of nums should be in exactly one array.
The difference between any two elements in one array is less than or equal to k.
Return a 2D array containing all the arrays. If it is impossible to satisfy the conditions, return an empty array. And if there are multiple answers, return any of them.

 

Example 1:

Input: nums = [1,3,4,8,7,9,3,5,1], k = 2
Output: [[1,1,3],[3,4,5],[7,8,9]]
Explanation: We can divide the array into the following arrays: [1,1,3], [3,4,5] and [7,8,9].
The difference between any two elements in each array is less than or equal to 2.
Note that the order of elements is not important.

*/

function divideArray(nums, k) {
  const size = nums.length;
  if (size % 3 !== 0) return [];

  nums.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < size; i += 3) {
    if (i + 2 < size && nums[i + 2] - nums[i] <= k) {
      result.push([nums[i], nums[i + 1], nums[i + 2]]);
    } else {
      return [];
    }
  }
  return result;
}

console.log(divideArray([1, 3, 4, 8, 7, 9, 3, 5, 1], 2));
