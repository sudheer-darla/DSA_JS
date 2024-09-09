//   Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function (m, n, head) {
  const matrix = Array.from({ length: m }, () => Array(n).fill(-1));

  let topRow = 0,
    bottomRow = m - 1,
    leftColumn = 0,
    rightColumn = n - 1;

  while (head) {
    // Fill top row
    for (let col = leftColumn; col <= rightColumn && head; ++col) {
      matrix[topRow][col] = head.val;
      head = head.next;
    }
    topRow++;

    // Fill right column
    for (let row = topRow; row <= bottomRow && head; ++row) {
      matrix[row][rightColumn] = head.val;
      head = head.next;
    }
    rightColumn--;

    // Fill bottom row
    for (let col = rightColumn; col >= leftColumn && head; --col) {
      matrix[bottomRow][col] = head.val;
      head = head.next;
    }
    bottomRow--;

    // Fill left column
    for (let row = bottomRow; row >= topRow && head; --row) {
      matrix[row][leftColumn] = head.val;
      head = head.next;
    }
    leftColumn++;
  }

  return matrix;
};

let head = new ListNode(3);
let nodes = [0, 2, 6, 8, 1, 7, 9, 4, 2, 5, 5, 0];
let curr = head;
for (let node of nodes) {
  curr.next = new ListNode(node);
  curr = curr.next;
}

console.log(spiralMatrix(3, 5, head));
