function CreateSpiralMatrix(A, B, C) {
  const n = A.length;
  let spiral = new Array(B).fill(0).map(() => new Array(C).fill(0));
  let [topBound, bottomBound, leftBound, rightBound] = [0, B - 1, 0, C - 1];
  let k = 0;

  while (topBound <= bottomBound && leftBound <= rightBound && k < n) {
    // Fill top row
    for (let i = leftBound; i <= rightBound && k < n; i++) {
      spiral[topBound][i] = A[k++];
    }
    topBound++;

    // Fill right column
    for (let i = topBound; i <= bottomBound && k < n; i++) {
      spiral[i][rightBound] = A[k++];
    }
    rightBound--;

    // Fill bottom row
    for (let i = rightBound; i >= leftBound && k < n; i--) {
      spiral[bottomBound][i] = A[k++];
    }
    bottomBound--;

    // Fill left column
    for (let i = bottomBound; i >= topBound && k < n; i--) {
      spiral[i][leftBound] = A[k++];
    }
    leftBound++;
  }

  return spiral;
}

console.log(CreateSpiralMatrix([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5, 2));
