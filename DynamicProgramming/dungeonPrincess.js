/*
Problem Description
The demons had captured the princess and imprisoned her in the bottom-right corner of a dungeon. 
The dungeon consists of M x N rooms laid out in a 2D grid. 
Our valiant knight was initially positioned in the top-left room and must fight his way through the dungeon to rescue the princess.

The knight has an initial health point represented by a positive integer. 
If at any point his health point drops to 0 or below, he dies immediately.

Some of the rooms are guarded by demons, 
so the knight loses health (negative integers) upon entering these rooms; 
other rooms are either empty (0's) or contain magic orbs that increase the knight's health (positive integers).

In order to reach the princess as quickly as possible, 
the knight decides to move only rightward or downward in each step.

Given a 2D array of integers A of size M x N. 
Find and return the knight's minimum initial health so that he is able to rescue the princess.
*/

function calculateMinimumHealthPoints(A) {
  const rows = A.length;
  const cols = A[0].length;

  let minHealthPoints = new Array(rows + 1);
  for (let i = 0; i < rows + 1; i++) {
    minHealthPoints[i] = [];
    for (let j = 0; j < cols + 1; j++) {
      minHealthPoints[i][j] = Infinity;
    }
  }

  minHealthPoints[rows - 1][cols] = 1;
  minHealthPoints[rows][cols - 1] = 1;
  console.log(minHealthPoints);

  for (let r = rows - 1; r >= 0; r--) {
    for (let c = cols - 1; c >= 0; c--) {
      let val =
        Math.min(minHealthPoints[r + 1][c], minHealthPoints[r][c + 1]) -
        A[r][c];
      minHealthPoints[r][c] = val <= 0 ? 1 : val;
    }
  }

  console.log(minHealthPoints);
  console.log(minHealthPoints[0][0]);
  return minHealthPoints[0][0];
}

let A = [
  [-2, -3, 3],
  [-5, -10, 1],
  [10, 30, -5],
];

calculateMinimumHealthPoints(A);
