/*
Problem Description
Given a string A. 
Find the longest palindromic subsequence 
(A subsequence which does not need to be contiguous and is a palindrome).

You need to return the length of longest palindromic subsequence.

Problem Constraints
1 <= length of(A) <= 103
*/

function LPS(A) {
  const n = A.length;
  let dp = Array(n)
    .fill(-1)
    .map((_) => Array(n).fill(-1));
  const getPalindromeLengthFromItoJ = (i, j) => {
    // Base cases
    if (i > j) return 0;
    if (i == j) return 1;

    if (dp[i][j] == -1) {
      if (A[i] == A[j]) {
        // Both ends can form a palindrome, check for in-between string
        dp[i][j] = getPalindromeLengthFromItoJ(i + 1, j - 1) + 2;
      } else {
        // These ends are not forming palindrome,
        // Check from next elements from both ends
        dp[i][j] = Math.max(
          getPalindromeLengthFromItoJ(i, j - 1),
          getPalindromeLengthFromItoJ(i + 1, j)
        );
      }
    }

    return dp[i][j];
  };
  return getPalindromeLengthFromItoJ(0, n - 1);
}

const testCases = [
  // Test Case 1: General case
  { input: 'bbbab', output: 4 },

  // Test Case 2: String with all distinct characters
  { input: 'abcdef', output: 1 },

  // Test Case 3: String with a single character
  { input: 'a', output: 1 },

  // Test Case 4: Empty string
  { input: '', output: 0 },

  // Test Case 5: String with all identical characters
  { input: 'aaaaa', output: 5 },

  // Test Case 6: String with alternating characters
  { input: 'ababab', output: 5 },

  // Test Case 7: Random case
  { input: 'racecar', output: 7 },
];

// Function to find the length of the longest palindromic subsequence
function longestPalindromicSubsequence(A) {
  // Your implementation of the solution goes here

  // For now, let's just return the length of the string as a placeholder
  return A.length;
}

// Run test cases
testCases.forEach((testCase, index) => {
  const { input, output } = testCase;
  const result = LPS(input);
  console.log(
    `Test Case ${index + 1}:`,
    result === output ? 'Passed' : 'Failed'
  );
});
