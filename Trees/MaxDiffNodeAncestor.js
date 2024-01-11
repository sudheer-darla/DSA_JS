/*
Given the root of a binary tree, 
find the maximum value v for which there exist different nodes a and b 
where v = |a.val - b.val| and a is an ancestor of b.

A node a is an ancestor of b if either: 
any child of a is equal to b or any child of a is an ancestor of b.

https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/description/?envType=daily-question&envId=2024-01-11 
*/

class TreeNode {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}
function maxDiffNodeAndAncestor(root) {
  // Helper function to recursively traverse the tree and update max/min values
  function dfs(node, max, min) {
    // Base case: if the node is null, return the current max-min
    if (!node) {
      return max - min;
    }

    // Update max and min values
    max = Math.max(max, node.val);
    min = Math.min(min, node.val);

    // Recursively calculate max absolute difference in left and right subtrees
    const leftDiff = dfs(node.left, max, min);
    const rightDiff = dfs(node.right, max, min);

    // Return the maximum of left and right subtree differences
    return Math.max(leftDiff, rightDiff);
  }

  // Start the recursion with the root node
  return dfs(root, root.val, root.val);
}

const t1 = new TreeNode(8);
t1.left = new TreeNode(3);
t1.right = new TreeNode(10);
t1.left.left = new TreeNode(1);
t1.left.right = new TreeNode(6);
t1.right.right = new TreeNode(14);
t1.right.right.left = new TreeNode(13);
t1.left.right.left = new TreeNode(4);
t1.left.right.right = new TreeNode(7);

console.log(maxDiffNodeAndAncestor(t1));
