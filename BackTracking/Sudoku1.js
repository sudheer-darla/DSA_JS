function solveSudoku(A) {
  const n = A.length;

  const isValid = (A, r, c, num) => {
    for (let i = 0; i < n; i++) {
      if (A[i][c] === num || A[r][i] === num) {
        return false;
      }

      const root = Math.sqrt(n);
      const blockX = r - (r % root);
      const blockY = c - (c % root);
      for (let i = 0; i < root; i++) {
        for (let j = 0; j < root; j++) {
          if (A[i + blockX][j + blockY] === num) {
            return false;
          }
        }
      }

      return true;
    }
  };

  const backTrack = (A, r, c) => {
    // Base cases
    if (r === n) {
      console.log(A);
      return true;
    }

    if (c === n) {
      r++;
      c = 0;
    }

    if (A[r][c] !== '.') {
      return backTrack(A, r, c + 1);
    }

    // Explore possibilites
    for (let num = 1; num <= n; num++) {
      if (isValid(A, r, c, num)) {
        A[r][c] = '' + num;
        if (backTrack(A, r + 1, c)) {
          return true;
        }
        // Undo the change
        A[r][c] = '.';
      }
    }

    return false;
  };

  return backTrack(A, 0, 0);
}

let A = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

console.log(solveSudoku(A));
