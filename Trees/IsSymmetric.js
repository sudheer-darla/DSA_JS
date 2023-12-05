class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function isSymmetric(root) {
  if (!root) {
    return true; // An empty tree is symmetric
  }

  // Helper function to check if two trees are symmetric
  function isMirror(left, right) {
    if (!left && !right) {
      return true; // Both are null, considered symmetric
    }

    if (!left || !right || left.val !== right.val) {
      return false; // One is null, or values are different, not symmetric
    }

    // Check if the subtrees are symmetric
    return isMirror(left.left, right.right) && isMirror(left.right, right.left);
  }

  // Start the check from the root's left and right subtrees
  return isMirror(root.left, root.right);
}

// Example usage:

// Create a symmetric tree
const tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(2);
tree2.left.left = new TreeNode(3);
tree2.left.right = new TreeNode(4);
tree2.right.left = new TreeNode(4);
tree2.right.right = new TreeNode(3);

console.log(isSymmetric(tree2)); // Output: true

// Create a non-symmetric tree
const tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(2);
tree2.left.right = new TreeNode(3);
tree2.right.right = new TreeNode(3);

console.log(isSymmetric(tree2)); // Output: false
