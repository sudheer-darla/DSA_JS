/*
A binary tree is named Even-Odd if it meets the following conditions:

The root of the binary tree is at level index 0, its children are at level index 1, their children are at level index 2, etc.
For every even-indexed level, all nodes at the level have odd integer values in strictly increasing order (from left to right).
For every odd-indexed level, all nodes at the level have even integer values in strictly decreasing order (from left to right).
Given the root of a binary tree, return true if the binary tree is Even-Odd, otherwise return false.

https://leetcode.com/problems/even-odd-tree/description/?envType=daily-question&envId=2024-02-29 
*/

//  Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isEvenOddTree = function (root) {
  // Base case
  if (!root.left && !root.right) return root.val & 1;
  // level order traversal
  let q = [root];
  let evenLevel = 1;
  while (q.length > 0) {
    const n = q.length;
    let currLevel = [];
    for (let i = 0; i < n; i++) {
      const dequed = q.shift();
      const incomingVal = dequed.val;
      const currLevelLength = currLevel.length;
      if (evenLevel) {
        // Elements must be odd
        if (incomingVal % 2 === 0) return false;
        // Elements must be in Increasing order
        if (
          currLevelLength > 0 &&
          currLevel[currLevelLength - 1] >= incomingVal
        )
          return false;
      } else {
        // Elements must be even
        if (incomingVal % 2 === 1) return false;
        // Elements must be in Decreasing order
        if (
          currLevelLength > 0 &&
          currLevel[currLevelLength - 1] <= incomingVal
        )
          return false;
      }

      // Add it to currLevel Array
      currLevel.push(incomingVal);

      // Add children to the queue
      if (dequed.left) q.push(dequed.left);
      if (dequed.right) q.push(dequed.right);
    }

    //Toggle evenLevel flag
    evenLevel ^= 1;
  }

  return true;
};

let root = new TreeNode(5);
root.left = new TreeNode(9);
root.right = new TreeNode(1);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(7);

console.log(isEvenOddTree(root));
