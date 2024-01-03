function uniquePathsGrid(rows, cols) {
  let dp = new Array(rows).fill(-1).map(() => new Array(cols).fill(-1));
  const recursivePathsTopDown = (row, col) => {
    // Base cases
    if (row === 0 || col === 0) {
      dp[row][col] = 1;
      return dp[row][col];
    }

    if (dp[row][col] !== -1) return dp[row][col];
    dp[row][col] =
      recursivePathsTopDown(row - 1, col) + recursivePathsTopDown(row, col - 1);
    return dp[row][col];
  };

  const uniquePathsBottomUp = () => {
    for (let i = 0; i < rows; i++) {
      dp[i][0] = 1;
    }

    for (let i = 0; i < cols; i++) {
      dp[0][i] = 1;
    }

    for (let i = 1; i < rows; i++) {
      for (let j = 1; j < cols; j++) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }

    // console.table(dp);
  };

  /*
  recursivePathsTopDown(rows-1, cols-1);
  return dp[rows-1][cols - 1];
  */

  uniquePathsBottomUp();
  return dp[rows - 1][cols - 1];
}

console.log(uniquePathsGrid(3, 4));
console.log(uniquePathsGrid(3, 3));
console.log(uniquePathsGrid(5, 5));
