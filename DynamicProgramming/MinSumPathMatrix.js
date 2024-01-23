/*
Problem Description
Given a M x N grid A of integers, 
find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Return the minimum sum of the path.
NOTE: You can only move either down or right at any point in time.

Problem Constraints
1 <= M, N <= 2000
-1000 <= A[i][j] <= 1000

Input Format
First and only argument is a 2-D grid A.

Output Format
Return an integer denoting the minimum sum of the path.
*/

function minPathSum(A) {
  // Tabulation
  let rows = A.length,
    cols = A[0].length;
  let dp = Array.from(new Array(rows), () => new Array(cols).fill(0));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i === 0 && j === 0) dp[i][j] = A[i][j];
      else {
        let up = Number.MAX_SAFE_INTEGER,
          left = Number.MAX_SAFE_INTEGER;
        if (i > 0) up = A[i][j] + dp[i - 1][j];
        if (j > 0) left = A[i][j] + dp[i][j - 1];
        dp[i][j] = Math.min(up, left);
      }
    }
  }
  //   console.table(dp);
  return dp[rows - 1][cols - 1];
}

const testInputs = [
  [
    [1, 3, 2],
    [4, 3, 1],
    [5, 6, 1],
  ],
  [
    [1, -3, 2],
    [2, 5, 10],
    [5, -5, 1],
  ],
];

for (let matrix of testInputs) {
  console.log(minPathSum(matrix));
}
