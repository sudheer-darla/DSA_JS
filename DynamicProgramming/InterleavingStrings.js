/*
Problem Description
Given A, B, C find whether C is formed by the interleaving of A and B.

Problem Constraints
1 <= length(A), length(B) <= 100
1 <= length(C) <= 200

Input Format
The first argument of input contains a string, A.
The second argument of input contains a string, B.
The third argument of input contains a string, C.

Output Format
Return 1 if string C is formed by interleaving of A and B else 0.
*/
function isInterleave(A, B, C) {
  const m = A.length;
  const n = B.length;
  const z = C.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  if (m + n !== z) {
    return 0;
  }

  // Base case: empty A and empty B result in empty C
  dp[0][0] = 1;

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0 && j > 0) {
        // If only considering characters from B
        dp[i][j] = B[j - 1] === C[j - 1] ? dp[i][j - 1] : 0;
      } else if (j === 0 && i > 0) {
        // If only considering characters from A
        dp[i][j] = A[i - 1] === C[i - 1] ? dp[i - 1][j] : 0;
      } else if (i > 0 && j > 0) {
        // Both A and B characters are considered
        if (A[i - 1] === C[i + j - 1] && B[j - 1] !== C[i + j - 1]) {
          dp[i][j] = dp[i - 1][j];
        } else if (B[j - 1] === C[i + j - 1] && A[i - 1] !== C[i + j - 1]) {
          dp[i][j] = dp[i][j - 1];
        } else if (B[j - 1] === C[i + j - 1] && A[i - 1] === C[i + j - 1]) {
          dp[i][j] = dp[i - 1][j] | dp[i][j - 1];
        }
      }
    }
  }

  return dp[m][n];
}

// Example usage:

const result = isInterleave('abc', 'def', 'adbcef');
console.log(result);
