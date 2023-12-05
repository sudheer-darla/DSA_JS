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
const symmetricTree = new TreeNode(1);
symmetricTree.left = new TreeNode(2);
symmetricTree.right = new TreeNode(2);
symmetricTree.left.left = new TreeNode(3);
symmetricTree.left.right = new TreeNode(4);
symmetricTree.right.left = new TreeNode(4);
symmetricTree.right.right = new TreeNode(3);

console.log(isSymmetric(symmetricTree)); // Output: true

// Create a non-symmetric tree
const nonSymmetricTree = new TreeNode(1);
nonSymmetricTree.left = new TreeNode(2);
nonSymmetricTree.right = new TreeNode(2);
nonSymmetricTree.left.right = new TreeNode(3);
nonSymmetricTree.right.right = new TreeNode(3);

console.log(isSymmetric(nonSymmetricTree)); // Output: false
