/*
Problem Description
As it is Tushar's Birthday on March 1st, 
he decided to throw a party to all his friends at TGI Fridays in Pune.
Given are the eating capacity of each friend, filling capacity of each dish and cost of each dish. A friend is satisfied if the sum of the filling capacity of dishes he ate is equal to his capacity. Find the minimum cost such that all of Tushar's friends are satisfied (reached their eating capacity).

NOTE:

Each dish is supposed to be eaten by only one person. Sharing is not allowed.

Each friend can take any dish unlimited number of times.

There always exists a dish with filling capacity 1 so that a solution always exists.
*/

function minCost(A, B, C) {
  let maxCapacity = 0;

  for (let capacity of A) {
    maxCapacity = Math.max(maxCapacity, capacity);
  }

  let dp = new Array(maxCapacity + 1).fill(Number.MAX_VALUE);

  // Base case: Minimum cost for capacity 0 is 0
  dp[0] = 0;

  // Iterate over each dish
  for (let i = 0; i < B.length; i++) {
    let dishFilling = B[i];
    let dishCost = C[i];

    // Iterate over each capacity from dishFilling to maxCapacity
    for (let capacity = dishFilling; capacity <= maxCapacity; capacity++) {
      if (dp[capacity - dishFilling] !== Number.MAX_VALUE) {
        dp[capacity] = Math.min(
          dp[capacity],
          dp[capacity - dishFilling] + dishCost
        );
      }
    }
  }

  let minCost = 0;

  // Calculate the minimum cost for each friend's eating capacity
  for (let capacity of A) {
    minCost += dp[capacity];
  }

  return minCost;
}

let A = [2, 4, 6];
let B = [2, 1, 3];
let C = [2, 5, 3];

console.log(minCost(A, B, C));
