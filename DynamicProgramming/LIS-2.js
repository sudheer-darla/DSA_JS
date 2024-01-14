function lengthOfLIS(nums) {
  const n = nums.length;
  if (n === 0) {
    return 0;
  }

  const tails = [nums[0]];

  for (let i = 1; i < n; i++) {
    if (nums[i] < tails[0]) {
      tails[0] = nums[i];
    } else if (nums[i] > tails[tails.length - 1]) {
      tails.push(nums[i]);
    } else {
      // Perform binary search to find the smallest element in tails that is greater than or equal to nums[i]
      let left = 0;
      let right = tails.length - 1;
      while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (tails[mid] < nums[i]) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }
      tails[left] = nums[i];
    }    
  }

  return tails.length;
}

// Example usage:
const A = [10, 22, 9, 33, 21, 50, 41, 60, 80];
const result = lengthOfLIS(A);
console.log('Length of Longest Increasing Subsequence:', result);
