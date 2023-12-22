/*
Problem Description
Given two strings A and B. 
Find the longest common subsequence ( A sequence which does not need to be contiguous), 
which is common in both the strings.

You need to return the length of such longest common subsequence.

Problem Constraints
1 <= Length of A, B <= 1005

Input Format
First argument is a string A.
Second argument is a string B.

Output Format
Return an integer denoting the length of the longest common subsequence.
*/

function LCS(A, B) {
  const m = A.length;
  const n = B.length;

  let dp = new Array(m + 1);
  for (let i = 0; i < n + 1; i++) {
    dp[i] = [];
  }

  for (let i = 0, j = 0; i <= m; i++) {
    dp[j][i] = 0;
  }

  for (let i = 0, j = 0; i <= n; i++) {
    dp[i][j] = 0;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] =
        A[i - 1] === B[j - 1]
          ? 1 + dp[i - 1][j - 1]
          : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  //   console.log(dp);
  return dp[m][n];
}

let A = 'abbcdgf';
let B = 'bbadcgf';

LCS(A, B);
