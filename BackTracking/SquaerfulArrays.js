/*
Problem Description
Given an array of integers A, the array is squareful if for every pair of adjacent elements, 
their sum is a perfect square.

Find and return the number of permutations of A that are squareful. 
Two permutations A1 and A2 differ if and only if there is some index i such that A1[i] != A2[i].

Problem Constraints
1 <= length of the array <= 12
1 <= A[i] <= 109


*/

function squareFullArrays(A) {
  // Helper functions
  // Helper function to check if a number is a perfect square
  const isPerfectSquare = (num) => {
    const sqrt = Math.sqrt(num);
    return sqrt === Math.floor(sqrt);
  };

  // Helper function to count squareful permutations
  const countSquarefulPermutationsHelper = (
    A,
    index,
    currentPermutation,
    used,
    permutationsCount
  ) => {
    if (index === A.length) {
      permutationsCount.push([...currentPermutation]);
      return;
    }

    for (let i = 0; i < A.length; i++) {
      if (used[i] || (i > 0 && A[i] === A[i - 1] && !used[i - 1])) {
        // Skip duplicates
        continue;
      }

      if (!used[i]) {
        used[i] = true;
        currentPermutation.push(A[i]);

        if (
          index === 0 ||
          isPerfectSquare(currentPermutation[index - 1] + A[i])
        ) {
          countSquarefulPermutationsHelper(
            A,
            index + 1,
            currentPermutation,
            used,
            permutationsCount
          );
        }

        used[i] = false;
        currentPermutation.pop();
      }
    }
  };
  // Helper functions

  //   Edge case
  if (A.length === 1) return +isPerfectSquare(A[0]);

  // Sort the input array for consistency
  A.sort((a, b) => a - b);

  const permutationsCount = [];
  const used = new Array(A.length).fill(false);

  countSquarefulPermutationsHelper(A, 0, [], used, permutationsCount);

  return permutationsCount.length;
}

console.log(squareFullArrays([2, 2, 2]));
