/*
Problem Description
Find the longest increasing subsequence of a given array of integers, A.

In other words, find a subsequence of array in which the subsequence's elements are in strictly increasing order, 
and in which the subsequence is as long as possible.

In this case, return the length of the longest increasing subsequence.

Problem Constraints
1 <= length(A) <= 2500
0 <= A[i] <= 2500

Input Format
The first and the only argument is an integer array A.

Output Format
Return an integer representing the length of the longest increasing subsequence.
*/
function longestIncreasingSubsequenceLength(A) {
  // Helper function for backtracking
  const backTrack = (currentIdx, prevIdx) => {
    // Base case
    if (currentIdx === A.length) {
      return 0;
    }

    // If the current element is greater than the previous element, we have two choices:
    // 1. Include the current element in the subsequence
    // 2. Skip the current element
    let includeCurrent = 0;
    if (A[currentIdx] > prevIdx) {
      includeCurrent = 1 + backTrack(currentIdx + 1, A[currentIdx]);
    }

    // Skip the current element
    const skipCurrent = backTrack(currentIdx + 1, prevIdx);

    // Return the maximum of the two choices
    return Math.max(includeCurrent, skipCurrent);
  };

  // Start the backtracking from the beginning of the array
  return backTrack(0, Number.NEGATIVE_INFINITY);
}

// Example usage:
const A1 = [10, 22, 9, 33, 21, 50, 41, 60, 80];

function lis_DP(A) {
  const n = A.length;
  const dp = Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (A[i] > A[j] && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
      }
    }
  }

  return Math.max(...dp, 0);
}

const A = [
  69, 54, 19, 51, 16, 54, 64, 89, 72, 40, 31, 43, 1, 11, 82, 65, 75, 67, 25, 98,
  31, 77, 55, 88, 85, 76, 35, 101, 44, 74, 29, 94, 72, 39, 20, 24, 23, 66, 16,
  95, 5, 17, 54, 89, 93, 10, 7, 88, 68, 10, 11, 22, 25, 50, 18, 59, 79, 87, 7,
  49, 26, 96, 27, 19, 67, 35, 50, 10, 6, 48, 38, 28, 66, 94, 60, 27, 76, 4, 43,
  66, 14, 8, 78, 72, 21, 56, 34, 90, 89,
];

console.log(lis_DP(A));

const result = longestIncreasingSubsequenceLength(A);
console.log(result);
