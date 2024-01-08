function candiesToBuy(A, B, C, D) {
  // Number of available nibbles
  const budget = D;

  // Array to store maximum sweetness for each remaining budget
  const dp = new Array(budget + 1).fill(0);

  // Iterate through each remaining budget value
  for (let remainingBudget = 0; remainingBudget <= budget; remainingBudget++) {
    // Iterate through each candy packet
    for (let candyIndex = 0; candyIndex < B.length; candyIndex++) {
      // Check if the cost of the candy packet is within the remaining budget
      if (C[candyIndex] <= remainingBudget) {
        // Update the maximum sweetness for the current budget
        dp[remainingBudget] = Math.max(
          dp[remainingBudget],
          dp[remainingBudget - C[candyIndex]] + B[candyIndex] * A[candyIndex]
        );
      }
    }
  }

  // Return the maximum sweetness achievable with the given budget
  return dp[budget];
}

console.log(candiesToBuy([1, 2, 3], [2, 2, 10], [2, 3, 9], 8));
