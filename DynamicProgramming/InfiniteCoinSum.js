/*
Problem Description
You are given a set of coins A. 
In how many ways can you make sum B assuming you have infinite amount of each coin in the set.

NOTE:

Coins in set A will be unique. Expected space complexity of this problem is O(B).
The answer can overflow. So, return the answer % (106 + 7).
*/

function coinSum2(A, B) {
  const mod = 10 ** 6 + 7;

  let numWays = new Array(B + 1).fill(0);
  // Base case: to make sum zero only one possible way, pick no item
  numWays[0] = 1;

  // for each number in the given array
  for (let i = 0; i < A.length; i++) {
    for (let j = A[i]; j <= B; j++) {
      numWays[j] += numWays[j - A[i]];
      numWays[j] %= mod;
    }
    // console.log(`For sum ${A[i]} possible ways are ${numWays}`);
  }

  return numWays[B];
}


coinSum2([1,2,3], 4);