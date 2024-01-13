/*
Problem Description

In Danceland, one person can party either alone or can pair up with another person.

Can you find in how many ways they can party if there are A people in Danceland?

Note: Return your answer modulo 10003, as the answer can be large.
Problem Constraints

1 <= A <= 105



Input Format

Given only argument A of type Integer, number of people in Danceland.



Output Format

Return an integer denoting the number of ways people of Danceland can party.
*/

function calculateDanceChances(A) {
  // Modulo value specified in the problem statement
  const mod = 10003;

  // Initialize an array to store the number of ways people can party
  let danceChancesArr = [0, 1, 2];

  // Iterate from 3 to A to calculate the number of ways people can party
  for (let i = 3; i <= A; i++) {
    // Recurrence relation to calculate the number of ways people can party
    // dp[i] = (dp[i - 1] + (dp[i - 2] * (i - 1)) % mod) % mod
    danceChancesArr[i] =
      (danceChancesArr[i - 1] + ((danceChancesArr[i - 2] * (i - 1)) % mod)) %
      mod;
  }

  // Return the result, which represents the number of ways A people can party
  return danceChancesArr[A];
}

// Example usage:
const result = calculateDanceChances(5);
console.log(result);
