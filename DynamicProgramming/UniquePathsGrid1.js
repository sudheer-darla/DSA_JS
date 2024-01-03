function uniquePathsGrid(rows, cols) {
  let dp = new Array(rows).fill(-1).map(() => new Array(cols).fill(-1));  
  const recursivePaths = (row, col) => {
    // Base cases
    if (row === 0 || col === 0) {
      dp[row][col] = 1;
      return dp[row][col];
    }

    if (dp[row][col] !== -1) return dp[row][col];
    dp[row][col] = recursivePaths(row - 1, col) + recursivePaths(row, col - 1);    
    return dp[row][col];
  };

  recursivePaths(rows-1, cols-1);
  return dp[rows-1][cols - 1];
}

console.log(uniquePathsGrid(3, 4));
console.log(uniquePathsGrid(3, 3));
console.log(uniquePathsGrid(5, 5));
