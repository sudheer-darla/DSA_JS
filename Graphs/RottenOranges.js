/*
Problem Description
Given a matrix of integers A of size N x M consisting of 0, 1 or 2.

Each cell can have three values:

The value 0 representing an empty cell.
The value 1 representing a fresh orange.
The value 2 representing a rotten orange.

Every minute, any fresh orange that is adjacent (Left, Right, Top, or Bottom) to a rotten orange becomes rotten. 
Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1 instead.

Note: Your solution will run on multiple test cases. If you are using global variables, make sure to clear them.

Problem Constraints
1 <= N, M <= 1000
0 <= A[i][j] <= 2

Input Format
The first argument given is the integer matrix A.

Output Format
Return the minimum number of minutes that must elapse until no cell has a fresh orange.
If this is impossible, return -1 instead.
*/

function Queue() {
  var a = [],
    b = 0;
  this.getLength = function () {
    return a.length - b;
  };
  this.isEmpty = function () {
    return 0 == a.length;
  };
  this.enqueue = function (b) {
    a.push(b);
  };
  this.dequeue = function () {
    if (0 != a.length) {
      var c = a[b];
      2 * ++b >= a.length && ((a = a.slice(b)), (b = 0));
      return c;
    }
  };
  this.peek = function () {
    return 0 < a.length ? a[b] : void 0;
  };
}

let dir = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
];
const inf = 99999999;

function solveit(grid) {
  let n = grid.length;
  let m = grid[0].length;
  let distance = new Array(n).fill(0).map(() => new Array(m).fill(0));
  let q = new Queue();
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      if (grid[i][j] == 1 || grid[i][j] == 0) distance[i][j] = inf;
      else {
        distance[i][j] = 0;
        q.enqueue([i, j]);
      }
    }
  }
  let x, y;

  while (!q.isEmpty()) {
    let tp = q.dequeue();
    x = tp[0];
    y = tp[1];

    let dx, dy;
    for (let k = 0; k < 4; ++k) {
      dx = x + dir[k][0];
      dy = y + dir[k][1];
      if (
        dx >= 0 &&
        dx < n &&
        dy >= 0 &&
        dy < m &&
        grid[dx][dy] == 1 &&
        distance[x][y] + 1 < distance[dx][dy]
      ) {
        distance[dx][dy] = 1 + distance[x][y];
        q.enqueue([dx, dy]);
      }
    }
  }
  let ans = 0;
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      if (grid[i][j] == 1) {
        ans = Math.max(ans, distance[i][j]);
      }
    }
  }
  return ans == inf ? -1 : ans;
}

function solve(A) {
  return solveit(A);
}

let A = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];
console.log(solve(A));
console.log(
  solve([
    [2, 1, 1],
    [0, 1, 0],
    [1, 0, 1],
  ])
);
