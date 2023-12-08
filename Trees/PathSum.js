/*
Given a binary tree and a sum, 
determine if the tree has a root-to-leaf path 
such that adding up all the values along the path equals the given sum.
*/

class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = this.right = null;
  }
}

const t1 = new TreeNode(5);
t1.left = new TreeNode(4);
t1.right = new TreeNode(8);
t1.left.left = new TreeNode(11);
t1.left.left.left = new TreeNode(7);
t1.left.left.right = new TreeNode(2);
t1.right.left = new TreeNode(13);
t1.right.right = new TreeNode(4);

const pathSum = (A, B) => {
  // Base case
  if (A === null) return false;
  let sumToCheck = B;
  sumToCheck -= A.data;

  //   Is it a leaf node ?
  if (A.left === null && A.right === null) {
    console.log(`Reached leaf node ${A.data}, remaining sum = ${sumToCheck}`);
    return sumToCheck === 0;
  }

  return pathSum(A.left, sumToCheck) || pathSum(A.right, sumToCheck);
};

console.log(pathSum(t1, 22));
