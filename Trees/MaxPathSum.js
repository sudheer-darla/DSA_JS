// Definition for a binary tree node
function TreeNode(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

// Function to find the maximum path sum in a binary tree
// param A: root node of the tree
// return an integer
function maxPathSum(A) {
  // Variable to store the maximum path sum, initialized with negative infinity
  let maxPathSum = -Infinity;

  // Helper function to calculate the maximum path sum for a subtree
  const maxSumHelper = (root) => {
    if (root === null) return 0;

    // Calculate the maximum path sum for the left and right subtrees
    const leftMaxSum = Math.max(0, maxSumHelper(root.left));
    const rightMaxSum = Math.max(0, maxSumHelper(root.right));

    // Update the maximum path sum considering the current node
    maxPathSum = Math.max(maxPathSum, root.data + leftMaxSum + rightMaxSum);

    // Return the maximum sum considering only one side of the subtree
    return root.data + Math.max(leftMaxSum, rightMaxSum);
  };

  // Call the helper function to find the maximum path sum
  maxSumHelper(A);

  // Return the final result
  return maxPathSum;
}
