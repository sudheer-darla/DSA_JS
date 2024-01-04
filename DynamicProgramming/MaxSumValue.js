/*
Problem Description

You are given an array A of N integers and three integers B, C, and D.

You have to find the maximum value of A[i]*B + A[j]*C + A[k]*D, where 1 <= i <= j <= k <= N.

Problem Constraints
1 <= N <= 105
-10000 <= A[i], B, C, D <= 10000

Input Format
First argument is an array A
Second argument is an integer B
Third argument is an integer C
Fourth argument is an integer D


*/

function maxSumPossible(A, B, C, D) {
  const n = A.length;
  let dp = new Array(n + 1).fill(0);
  const coeff = [B, C, D];
  dp[0] = -Infinity;
  for (let j = 0; j < 3; j++) {
    for (let i = 1; i <= n; i++) {
      dp[i] = Math.max(A[i - 1] * coeff[j] + dp[i], dp[i - 1]);
    }
  }
  console.log(dp);
  return dp[n];
}

console.log(maxSumPossible([1, 5, -3, 4, -2], 2, 1, -1));
