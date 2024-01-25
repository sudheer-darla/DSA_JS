/*

Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.

 

Example 1:

Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.

https://leetcode.com/problems/longest-common-subsequence/description/?envType=daily-question&envId=2024-01-25 

*/

var longestCommonSubsequence = function (text1, text2) {
  const n1 = text1.length;
  const n2 = text2.length;

  // Initialize a 2D array with all elements as 0
  const dp = Array.from({ length: n1 + 1 }, () => Array(n2 + 1).fill(0));

  // Fill the dp array
  for (let i = 1; i <= n1; i++) {
    for (let j = 1; j <= n2; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // The length of the longest common subsequence is stored in dp[n1][n2]
  return dp[n1][n2];
};

const testCases = [
  // Base cases
  { text1: '', text2: '', expected: 0 },
  { text1: 'abc', text2: '', expected: 0 },
  { text1: '', text2: 'xyz', expected: 0 },

  // Generic cases
  { text1: 'abcde', text2: 'ace', expected: 3 }, // Common subsequence: "ace"
  { text1: 'abc', text2: 'def', expected: 0 }, // No common subsequence

  // Cases with repeated characters
  { text1: 'aab', text2: 'ab', expected: 2 }, // Common subsequence: "ab"
  { text1: 'aaaaa', text2: 'aa', expected: 2 }, // Common subsequence: "aa"

  // Random cases
  { text1: 'AGGTAB', text2: 'GXTXAYB', expected: 4 }, // Common subsequence: "GTAB"
  { text1: 'abcdxyz', text2: 'xyzabcd', expected: 4 }, // Common subsequence: "abcd"
];

// Function to run test cases
function runTestCases() {
  for (const testCase of testCases) {
    const result = longestCommonSubsequence(testCase.text1, testCase.text2);
    const status = result === testCase.expected ? 'PASSED' : 'FAILED';
    console.log(
      `Test Case: ${testCase.text1}, ${testCase.text2} => Result: ${result}, Expected: ${testCase.expected} => ${status}`
    );
  }
}

// Run the test cases
runTestCases();

/*
dp array:
+---+---+---+---+---+---+
|   | 0 | a | c | e |   |
+---+---+---+---+---+---+
| 0 | 0 | 0 | 0 | 0 | 0 |
+---+---+---+---+---+---+
| a | 0 |   |   |   |   |
+---+---+---+---+---+---+
| b | 0 |   |   |   |   |
+---+---+---+---+---+---+
| c | 0 |   |   |   |   |
+---+---+---+---+---+---+
| d | 0 |   |   |   |   |
+---+---+---+---+---+---+
| e | 0 |   |   |   |   |
+---+---+---+---+---+---+


dp array (after filling):
+---+---+---+---+---+---+
|   | 0 | a | c | e |   |
+---+---+---+---+---+---+
| 0 | 0 | 0 | 0 | 0 | 0 |
+---+---+---+---+---+---+
| a | 0 | 1 | 1 | 1 | 1 |
+---+---+---+---+---+---+
| b | 0 | 1 | 1 | 1 | 1 |
+---+---+---+---+---+---+
| c | 0 | 1 | 2 | 2 | 2 |
+---+---+---+---+---+---+
| d | 0 | 1 | 2 | 2 | 2 |
+---+---+---+---+---+---+
| e | 0 | 1 | 2 | 3 | 3 |
+---+---+---+---+---+---+

Time Complexity:

The nested loops iterate over each character of text1 and text2 exactly once, resulting in a time complexity of O(n1 * n2), where n1 is the length of text1 and n2 is the length of text2.
The constant-time operations inside the loops do not significantly impact the overall time complexity.
Space Complexity:

The space complexity is determined by the size of the dp array, which is (n1 + 1) x (n2 + 1).
Therefore, the space complexity is O(n1 * n2).
*/
