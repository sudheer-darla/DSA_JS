function nDigitNumbers(A, B) {
  if (A === 0) {
    return 0;
  }

  const mod = 1000000007;

  const dp = new Array(A + 1).fill(0).map(() => new Array(B + 1).fill(0));

  // Numbers of ways we can form a value using 1 digit depend on the value itself.
  // If the value is [1-9] then it is possible to construct the value using 1 digit. Else it will be 0.
  for (let j = 1; j <= 9 && j <= B; j++) {
    dp[1][j] = 1;
  }

  for (let i = 2; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      // Try out the possible digits from [0-9]
      for (let x = 0; x <= 9; x++) {
        if (j - x >= 0) {
          dp[i][j] = (dp[i][j] + dp[i - 1][j - x]) % mod;
        }
      }
    }
  }

  // Uncomment the following lines to print the dp array
  // for (const arr of dp) {
  //     console.log(arr);
  // }

  return dp[A][B];
}

// Example usage:
const result = nDigitNumbers(2, 2);
console.log(result); // Output should be 2
