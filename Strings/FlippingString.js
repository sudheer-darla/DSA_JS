function MaxConsecutiveOnesAfterFlippingZeroes(A) {
  const n = A.length;
  let maxConsecutiveOnes = 0;

  // We need to track the count of 1's before and after a zero segment
  let leftOnes = 0;
  let rightOnes = 0;
  let i = 0;

  // Start traversing the string
  while (i < n) {
    // Count consecutive 1's from the left
    while (i < n && A[i] === '1') {
      leftOnes++;
      i++;
    }

    // Count consecutive 0's
    let zeroes = 0;
    while (i < n && A[i] === '0') {
      zeroes++;
      i++;
    }

    // Count consecutive 1's after the zero segment
    rightOnes = 0;
    while (i < n && A[i] === '1') {
      rightOnes++;
      i++;
    }

    // Calculate the potential max length by flipping this zero segment
    if (zeroes > 0) {
      maxConsecutiveOnes = Math.max(
        maxConsecutiveOnes,
        leftOnes + zeroes + rightOnes
      );
    }

    leftOnes = rightOnes;
  }

  return maxConsecutiveOnes;
}

console.log(MaxConsecutiveOnesAfterFlippingZeroes('10010'));

console.log(MaxConsecutiveOnesAfterFlippingZeroes('000'));

console.log(
  MaxConsecutiveOnesAfterFlippingZeroes(
    '11001000001111111010100100100110101011101101101010'
  )
);
