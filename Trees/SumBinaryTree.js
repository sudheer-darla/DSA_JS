/*
Given a binary tree. Check whether the given tree is a Sum-binary Tree or not.
Sum-binary Tree is a Binary Tree where 
the value of a every node is equal to sum of the nodes present in its left subtree and right subtree.

An empty tree is Sum-binary Tree and sum of an empty tree can be considered as 0. 
A leaf node is also considered as SumTree.

Return 1 if it sum-binary tree else return 0.
*/

function isSumBinaryTree(A) {
  const sum = (root) => {
    if (root === null) {
      return 0;
    }

    return root.data + sum(root.left) + sum(root.right);
  };

  console.log(A.data, sum(A.left), sum(A.right));
  return +(A.data === sum(A.left) + sum(A.right));
}

class TreeNode {
  constructor(val) {
    this.data = val;
    this.left = this.right = null;
  }
}

// Create first tree
const tree1 = new TreeNode(10);
tree1.left = new TreeNode(4);
tree1.right = new TreeNode(2);
tree1.left.left = new TreeNode(2);
tree1.left.right = new TreeNode(2);

console.log(isSumBinaryTree(tree1));
