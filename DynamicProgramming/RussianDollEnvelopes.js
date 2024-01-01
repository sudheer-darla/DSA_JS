/*
Problem Description
Given a matrix of integers A of size N x 2 describing dimensions of N envelopes, 
where A[i][0] denotes the height of the ith envelope and A[i][1] denotes the width of the ith envelope.

One envelope can fit into another if and only if 
both the width and height of one envelope is greater than the width and height of the other envelope.

Find the maximum number of envelopes you can put one inside other.
*/

function solve(A) {
  const n = A.length;
  // Edge cases
  if (n <= 0) return n;

  //   Sort the envelopes based on dimensions
  A.sort((e1, e2) => e1[0] - e2[0] || e1[1] - e2[1]);

  let nestedEnvelopeCountArr = new Array(n).fill(1);

  for (let i = 0; i < n; i++) {
    // For each envelope, check all smaller envelopes for fitting possibilty
    for (let j = 0; j < i; j++) {
      if (A[i][0] > A[j][0] && A[i][1] > A[j][1]) {
        nestedEnvelopeCountArr[i] = Math.max(
          nestedEnvelopeCountArr[j] + 1,
          nestedEnvelopeCountArr[i]
        );
      }
    }
  }

  return Math.max(...nestedEnvelopeCountArr);
}

solve([
  [6, 18],
  [2, 14],
  [5, 6],
  [4, 15],
  [8, 11],
  [3, 11],
  [11, 10],
  [5, 11],
]);
