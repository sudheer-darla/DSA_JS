/*
You are given an m x n integer array grid. 
There is a robot initially located at the top-left corner (i.e., grid[0][0]). 
The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). 
The robot can only move either down or right at any point in time.

An obstacle and space are marked as 1 or 0 respectively in grid. 
A path that the robot takes cannot include any square that is an obstacle.

Return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The testcases are generated so that the answer will be less than or equal to 2 * 109.


Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
Output: 2
Explanation: There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right

*/

function uniquePathsWithObstacles(grid) {
  // Edge case: First cell itself is an obstacle, then there is no way to bottom right
  if (grid[0][0]) return 0;

  const rows = grid.length;
  const cols = grid[0].length;

  // Create a DP array to store pathCount for each cell
  let pathCountMatrix = [];
  for (let i = 0; i < rows; i++) {
    pathCountMatrix.push(new Array(cols).fill(0));
  }

  // To reach the first cell, there is only one way, so start with 1
  pathCountMatrix[0][0] = 1;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (!i & !j) continue; // Skip top left cell

      // Handle obstacles
      if (grid[i][j]) {
        pathCountMatrix[i][j] = 0;
        continue;
      }

      //   Update pathCounts based on prev Left and prev Top cells
      pathCountMatrix[i][j] =
        (!i ? 0 : pathCountMatrix[i - 1][j]) +
        (!j ? 0 : pathCountMatrix[i][j - 1]);
    }
  }

  console.table(pathCountMatrix);

  return pathCountMatrix[rows - 1][cols - 1];
}

let A = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];
let B = [
  [0, 1],
  [0, 0],
];
console.log(uniquePathsWithObstacles(A));
console.log(uniquePathsWithObstacles(B));
