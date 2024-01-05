function moveZeroes(A) {
  const n = A.length;
  let start = 0;
  for (let i = 0; i < n; i++) {
    if (A[i] !== 0) {
      A[start++] = A[i];
    }
  }

  for (let j = start; j < n; j++) {
    A[j] = 0;
  }

//   console.log(A);
  return A;
}

moveZeroes([1, 6, 1, 0, 9, 6, 2, 5, 6, 2, 10, 2, 0, 6]);
