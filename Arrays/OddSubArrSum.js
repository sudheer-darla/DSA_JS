/*
Given an array of positive integers arr, 
return the sum of all possible odd-length subarrays of arr.

A subarray is a contiguous subsequence of the array.
*/

function sumOddLengthSubarrays(A) {
  let oddSum = 0;
  const n = A.length;

  for (let i = 0; i < n; i++) {
    let contributionCount = (i + 1) * (n - i);
    let oddSubArrayCount = Math.ceil(contributionCount / 2);
    oddSum += oddSubArrayCount * A[i];    
  }

  return oddSum;
}

let A = [1, 4, 2, 5, 3];
console.log(sumOddLengthSubarrays(A));
