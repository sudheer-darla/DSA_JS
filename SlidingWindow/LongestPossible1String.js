function longestOnes(nums, k) {
  const getZeroCount = (arr) => {
    let count = 0;
    for (let num of arr) {
      if (num === 0) count++;
    }

    return count;
  };

  const zerosInGivenArray = getZeroCount(nums);

  if (zerosInGivenArray < k) return nums.length;

  let left = (right = 0);
  let maxOnesLength = -1;

  let currZeroCount = 0;
  while (right < nums.length) {
    if (nums[right] === 0) currZeroCount++;

    if (currZeroCount > k) {
      // Update the maxLength
      maxOnesLength = Math.max(maxOnesLength, right - left);

      // Move the left pointer to check next possible window
      while (currZeroCount > k) {
        if (nums[left] === 0) {
          currZeroCount--;
        }
        left++;
      }
    }
    right++;
  }

  maxOnesLength = Math.max(maxOnesLength, right - left);

  return maxOnesLength;
}

longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1], 0);
