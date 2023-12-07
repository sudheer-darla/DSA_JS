function solveSudoku(A) {
  let board = [];

  // Changing the input array to the array of numbers
  for (let i = 0; i < A.length; i++) {
    // console.log(A[i]);
    board.push(A[i].map((ele) => (parseInt(ele) ? parseInt(ele) : 0)));
  }

  solvePartialSudoku(0, 0, board);
  board = board.map((row) => row.join(""));

  for (let i = 0; i < A.length; i++) {
    A[i] = board[i];
  }
  return A;
}

function solvePartialSudoku(row, col, board) {
  let currentRow = row,
    currentCol = col;
  //base condition
  if (currentCol === board[currentRow].length) {
    currentRow++;
    currentCol = 0;
    if (currentRow === board.length) return true;
  }

  // If the the current element is 0 then try to fill the possible values
  if (board[currentRow][currentCol] === 0) {
    return tryDigitsAtPositions(currentRow, currentCol, board);
  }

  return solvePartialSudoku(currentRow, currentCol + 1, board);
}

function tryDigitsAtPositions(row, col, board) {
  for (let digit = 1; digit <= 9; digit++) {
    if (isValidSudoku(digit, row, col, board)) {
      board[row][col] = digit;
      if (solvePartialSudoku(row, col + 1, board)) return true;
    }
  }

  // If the all the permutations of the value is not valid then resetting the value
  board[row][col] = 0;
  return false;
}

function isValidSudoku(value, row, col, board) {
  const rowisValid = !board[row].includes(value);
  const colisValid = !board.map((r) => r[col]).includes(value);

  // Checking the rows and columns are valid
  if (!rowisValid || !colisValid) return false;

  const subGridRow = Math.floor(row / 3) * 3;
  const subGridcol = Math.floor(col / 3) * 3;

  // Checking whether the subgrid is valid
  for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
    for (let colIdx = 0; colIdx < 3; colIdx++) {
      const rowToCheck = subGridRow + rowIdx;
      const colToCheck = subGridcol + colIdx;
      const existingValue = board[rowToCheck][colToCheck];
      if (existingValue === value) return false;
    }
  }
  return true;
}

let A = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(solveSudoku(A));
