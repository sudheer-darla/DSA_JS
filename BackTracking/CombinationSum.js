/*
Problem Description
Given an array of candidate numbers A and a target number B, 
find all unique combinations in A where the candidate numbers sums to B.

The same repeated number may be chosen from A unlimited number of times.

Note:

1) All numbers (including target) will be positive integers.

2) Elements in a combination (a1, a2, … , ak) must be in non-descending order. (ie, a1 ≤ a2 ≤ … ≤ ak).

3) The combinations themselves must be sorted in ascending order.

4) CombinationA > CombinationB iff (a1 > b1) OR (a1 = b1 AND a2 > b2) OR 
... (a1 = b1 AND a2 = b2 AND ... ai = bi AND ai+1 > bi+1)

5) The solution set must not contain duplicate combinations.


Problem Constraints
1 <= |A| <= 20
1 <= A[i] <= 50
1 <= B <= 500

Input Format
The first argument is an integer array A.
The second argument is integer B.

Output Format
Return a vector of all combinations that sum up to B.
*/

function doWork(candidates, index, currentCombination, currentSum, target, ans) {
  // Base cases
  if (currentSum > target) {
    return;
  }
  if (currentSum == target) {
    ans.push(currentCombination.slice());
    return;
  }

  // try for all possible next candidate
  for (let i = index; i < candidates.length; i++) {
    currentCombination.push(candidates[i]);
    currentSum += candidates[i];

    doWork(candidates, i, currentCombination, currentSum, target, ans);

    currentCombination.pop();
    currentSum -= candidates[i];
  }
}

function combinationSum(A, B) {
  let current = [];
  let ans = [];
  A.sort((a, b) => a - b);

  // list of all unique candidates
  let uniqueCandidates = [...new Set(A)];

  doWork(uniqueCandidates, 0, current, 0, B, ans);
  return ans;
}

let A = [2, 3, 6, 7];
let B = 7;
console.log(combinationSum(A, B));
