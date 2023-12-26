function nQueens(N) {
  let board = new Array(N);
  for (let i = 0; i < N; i++) {
    board[i] = [];
    for (let j = 0; j < N; j++) {
      board[i][j] = 0;
    }
  }
  //   console.log(board);

  const isCollisionPossible = (r1, c1, r2, c2) => {
    return r1 === r2 || c1 === c2 || r1 - c1 === r2 - c2 || r1 + c1 === r2 + c2;
  };

  const isValidCell = (r, c) => {
    for (let i = 0; i < r; i++) {
      for (let j = 0; j < N; j++) {
        if (board[i][j] === 1) {
          if (isCollisionPossible(i, j, r, c)) return false;
        }
      }
    }

    return true;
  };

  const backTrack = (board, r, N) => {
    // Base case
    if (r === N) {
      console.log(board);
      return;
    }
    for (let c = 0; c < N; c++) {
      if (isValidCell(r, c)) {
        board[r][c] = 1;
        backTrack(board, r + 1, N);
        board[r][c] = 0;
      }
    }
  };

  backTrack(board, 0, N);
}

nQueens(4);
