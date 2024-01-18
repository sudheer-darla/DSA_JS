/*
Problem Description
Given an array of size N of candidate numbers A and a target number B. Return all unique combinations in A where the candidate numbers sums to B.

Each number in A may only be used once in the combination.

Note:

All numbers (including target) will be positive integers.
Elements in a combination (a1, a2, … , ak) must be in non-descending order. (ie, a1 ≤ a2 ≤ … ≤ ak).
The solution set must not contain duplicate combinations.


*/

function combinationSum(A, B) {
  const n = A.length;
  A.sort((a, b) => a - b);
  let ans = [];

  const backTrack = (idx, currComb, currSum) => {
    // Base case
    if (currSum === B) {
      ans.push([...currComb]);
      return;
    }

    // Explore paths
    for (let i = idx; i < n; i++) {
      // Skip duplicates to avoid duplicate combinations
      if (i > idx && A[i] === A[i - 1]) {
        continue;
      }

      if (A[i] > B) break;

      currComb.push(A[i]);
      // Pick next element
      currSum += A[i];
      backTrack(i + 1, currComb, currSum);
      currComb.pop();
      currSum -= A[i];
    }
  };

  backTrack(0, [], 0);
  return ans;
}

let A = [10, 1, 2, 7, 6, 1, 5];
let B = 8;

console.log(combinationSum(A, B));
console.log(combinationSum([8, 10, 6, 11, 1, 16, 8], 28));
