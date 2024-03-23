function spiralOrder(matrix) {
  if (matrix.length === 0) return [];

  const spiralOrderArr = [];
  let top = 0,
    bottom = matrix.length - 1,
    left = 0,
    right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    // Traverse top row
    for (let i = left; i <= right; i++) {
      spiralOrderArr.push(matrix[top][i]);
    }
    top++;

    // Traverse rightmost column
    for (let i = top; i <= bottom; i++) {
      spiralOrderArr.push(matrix[i][right]);
    }
    right--;

    // Traverse bottom row
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        spiralOrderArr.push(matrix[bottom][i]);
      }
      bottom--;
    }

    // Traverse leftmost column
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        spiralOrderArr.push(matrix[i][left]);
      }
      left++;
    }
  }

  return spiralOrderArr;
}

console.log(spiralOrder([[1]]));
console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
