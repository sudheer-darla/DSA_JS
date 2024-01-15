/*
Suppose you are a thief trying to maximize your profit by stealing items from a store. 
You have a knapsack with a maximum weight capacity of 10 units. 
The store has the following items:

Item	Weight (w)	Value (v)
A	        2	        3
B	        3	        4
C	        4	        5
D	        5	        8
Your goal is to determine the maximum value you can steal without exceeding the weight capacity of your knapsack.
*/

let dp = new Array(1001).fill(-1).map(() => new Array(1001).fill(-1));
function getMaxProfit(weights, values, itemCount, remainingCapacity) {
  // Base case
  if (itemCount === 0 || remainingCapacity === 0) {
    dp[itemCount][remainingCapacity] = 0;
    return dp[itemCount][remainingCapacity];
  }

  if (dp[itemCount][remainingCapacity] !== -1) {
    return dp[itemCount][remainingCapacity];
  }

  // Explore possibilities
  if (weights[itemCount - 1] > remainingCapacity) {
    // Can't pick it
    dp[itemCount][remainingCapacity] = getMaxProfit(
      weights,
      values,
      itemCount - 1,
      remainingCapacity
    );
  } else {
    // Two possibilities -> 1. Pick it, 2. Don't pick it
    dp[itemCount][remainingCapacity] = Math.max(
      getMaxProfit(weights, values, itemCount - 1, remainingCapacity),
      values[itemCount - 1] +
        getMaxProfit(
          weights,
          values,
          itemCount - 1,
          remainingCapacity - weights[itemCount - 1]
        )
    );
  }
  return dp[itemCount][remainingCapacity];
}

function knapSack(weights, values, capacity) {
  getMaxProfit(weights, values, values.length, capacity);
  return dp[values.length][capacity];
}

let A = [2, 3, 4, 5];
let B = [3, 4, 5, 8];

console.log(knapSack(A, B, 10));
