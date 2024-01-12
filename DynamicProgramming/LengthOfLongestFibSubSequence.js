function lengthOfLongFibSubSequence(A) {
  // Get the length of the array A
  const n = A.length;
  // Initialize the maximum length to 0
  let maxLen = 0;
  // Create a Map to store the index of each element in A
  const map = new Map();

  // Populate the map with the indices of elements in A
  for (let i = 0; i < n; i++) {
    map.set(A[i], i);
  }

  // Initialize a 2D array dp with dimensions n x n and fill it with 0
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));

  // Nested loops to iterate through the array and update dp values
  for (let i = 2; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      // Calculate the difference between elements A[i] and A[j]
      const diff = A[i] - A[j];
      // Check if the difference is present in the map and its index is less than j
      if (map.has(diff) && map.get(diff) < j) {
        // Update dp values based on the recurrence relation
        dp[i][j] = Math.max(dp[i][j], dp[j][map.get(diff)] + 1);
        // Update the maximum length if needed
        maxLen = Math.max(maxLen, dp[i][j]);
      }
    }
  }

  // Return the final result, which is maxLen + 2 (if maxLen is not 0)
  return maxLen === 0 ? 0 : maxLen + 2;
}

console.log(lengthOfLongFibSubSequence([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(lengthOfLongFibSubSequence([1, 3, 7, 11, 12, 14, 18]));
