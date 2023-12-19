/*
Problem Description
Given a knapsack weight A and a set of items with certain value B[i] and weight C[i], 
we need to calculate maximum amount that could fit in this quantity.

This is different from classical Knapsack problem, 
here we are allowed to use unlimited number of instances of an item.

Problem Constraints
1 <= A <= 1000
1 <= |B| <= 1000
1 <= B[i] <= 1000
1 <= C[i] <= 1000

Input Format
First argument is the Weight of knapsack A
Second argument is the vector of values B
Third argument is the vector of weights C
*/

let A = 10;
let B = [6, 7];
let C = [5, 5];

function unBoundedSkanpSack(A, B, C) {
  let W = A;
  let dp = new Array(W + 1).fill(0);
  for (let i = 0; i <= W; i++) {
    for (let j = 0; j < B.length; j++) {
      if (C[j] <= i) {
        dp[i] = Math.max(dp[i], dp[i - C[j]] + B[j]);
      }
    }
  }
  // console.log(dp);
  return dp[W];
}

console.log(
  unBoundedSkanpSack(
    80,
    [14, 13, 7, 5, 5, 7, 13, 16, 17, 1],
    [10, 20, 9, 4, 15, 4, 4, 1, 15, 2]
  )
);

console.log(unBoundedSkanpSack(10, [5], [10]));

const weights = [2, 3, 4, 5];
const values = [3, 4, 5, 6];
const capacity = 8;

const result = unBoundedSkanpSack(capacity, values, weights);
console.log(result); // Output: 21
