/*
Problem Description

You are trying to send signals to aliens using a linear array of A laser lights. 
You don't know much about how the aliens are going to percieve the signals, 
but what you know is that if two consecutive lights are on then 
the aliens might take it as a sign of danger and destroy the earth.

Find and return the total number of ways in which 
you can send a signal without compromising the safty of the earth. 
Return the ans % 109 + 7.

Problem Constraints
1 <= A <= 105

Input Format
The only argument given is integer A.
*/

function ways2SendLight(A) {
  const mod = 10 ** 9 + 7;

  // Initialize an array to store the number of ways for each position
  let waysArr = new Array(A + 1);

  // Base case: No lasers, only one way (no light)
  waysArr[0] = 1;

  // Base case: Two ways - either turn the light on or off
  waysArr[1] = 2;

  // Iterate through the array starting from the third position
  for (let i = 2; i <= A; i++) {
    // Calculate the number of ways for the current position
    // by considering either the previous position or the position two steps back
    waysArr[i] = (waysArr[i - 1] + waysArr[i - 2]) % mod;
  }

  // Return the total number of ways for the given array length
  return waysArr[A];
}
