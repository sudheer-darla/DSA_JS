/*
Problem Description
Given an array of integers A of size N.

A triplet (i, j, k), i < j <= k is called a power triplet if A[i] ^ A[i+1] ^....A[j-1] = A[j] ^.....^A[k].
Where, ^ denotes bitwise xor.
Return the count of all possible power triplets. Since the answer could be large return answer % 109 +7.

Problem Constraints
1 <= N <= 100000
1 <= A[i] <= 100000

Input Format
The first argument given is the integer array A.

Output Format
Return the count of all possible power triplets % 109 + 7.
*/

const MOD = 1e9 + 7;

// Function to calculate the count of power triplets in the given array
function getXorTripletCount(arr) {
  const n = arr.length; // Length of the input array
  let result = 0; // Variable to store the final result
  let prefix = 0; // Variable to calculate the XOR prefix

  // Maps to store the count and total for each XOR prefix encountered
  const prefixCount = new Map();
  const prefixTotal = new Map();

  // Initialize count for XOR prefix 0 as 1 (empty subarray is always a valid XOR triplet)
  prefixCount.set(0, 1);

  // Loop through the array to calculate the XOR prefix and update counts
  for (let i = 0; i < n; ++i) {
    prefix ^= arr[i]; // Calculate XOR prefix

    // Retrieve count and total for the current XOR prefix (default to 0 if not found)
    const count = prefixCount.has(prefix) ? prefixCount.get(prefix) : 0;
    const total = prefixTotal.has(prefix) ? prefixTotal.get(prefix) : 0;

    // Update the result by adding the count multiplied by the current index minus total
    result += count * i - total;

    // Update the count and total for the current XOR prefix in the maps
    prefixCount.set(prefix, (count || 0) + 1);
    prefixTotal.set(prefix, (total || 0) + i + 1);
  }

  // Return the final result modulo MOD
  return result % MOD;
}

const testCases = [
  { input: [1, 2, 3, 4, 5], expectedOutput: 5 },
  { input: [1, 2, 1, 2, 1], expectedOutput: 6 },
  { input: [0, 0, 0, 0], expectedOutput: 10 },
  { input: [7, 7, 7, 7, 7], expectedOutput: 10 },
  { input: [-2, -1, 0, 1, 2], expectedOutput: 3 },
  { input: [-3, -2, -1, 0, 1, 2, 3], expectedOutput: 8 },
  { input: [], expectedOutput: 0 },
  { input: [5], expectedOutput: 0 },
  // Add more test cases as needed
];

function runTestCases() {
  for (let i = 0; i < testCases.length; i++) {
    const { input, expectedOutput } = testCases[i];
    const result = getXorTripletCount(input);

    if (result === expectedOutput) {
      console.log(`Test case ${i + 1}: PASSED`);
    } else {
      console.log(`Test case ${i + 1}: FAILED`);
      console.log(`  - Input: ${JSON.stringify(input)}`);
      console.log(`  - Expected Output: ${expectedOutput}`);
      console.log(`  - Actual Output: ${result}`);
    }
  }
}

// Run the test cases
runTestCases();
