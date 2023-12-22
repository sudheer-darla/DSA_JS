/*
Problem Description
Given two strings A and B, find the minimum number of steps required to convert A to B. 
(each operation is counted as 1 step.)

You have the following 3 operations permitted on a word:
Insert a character
Delete a character
Replace a character

Problem Constraints
1 <= length(A), length(B) <= 450
*/

//param A : string
//param B : string
//return an integer
function minDistance(A, B) {
  const n = A.length;
  const m = B.length;
  const dp = new Array(n + 1).fill().map(() => new Array(m + 1).fill(-1));

  //i represents the current parth of the substring A to be considered from 0 to ith index
  // same is j for B
  const minOperations = (A, B, i, j, dp) => {
    if (dp[i][j] !== -1) {
      return dp;
    }
    if (i === 0) {
      dp[i][j] = j;
      return dp;
    }
    if (j === 0) {
      dp[i][j] = i;
      return dp;
    }

    if (A[i - 1] === B[j - 1]) {
      dp[i][j] = minOperations(A, B, i - 1, j - 1, dp)[i - 1][j - 1];
      return dp;
    } else {
      const insert = minOperations(A, B, i, j - 1, dp)[i][j - 1];
      const replace = minOperations(A, B, i - 1, j - 1, dp)[i - 1][j - 1];
      const del = minOperations(A, B, i - 1, j, dp)[i - 1][j];

      dp[i][j] = Math.min(insert, replace, del) + 1;

      return dp;
    }
  };
  return minOperations(A, B, n, m, dp)[n][m];
}

let A = 'Anshuman';
let B = 'Antihuman';

console.log(minDistance(A, B));
