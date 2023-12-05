class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

// Create first tree
const tree1 = new TreeNode(6);
tree1.left = new TreeNode(9);
tree1.right = new TreeNode(4);
tree1.right.left = new TreeNode(8);
tree1.right.left.right = new TreeNode(3);

// Create same second tree
const tree2 = new TreeNode(6);
tree2.left = new TreeNode(9);
tree2.right = new TreeNode(4);
tree2.right.left = new TreeNode(8);
tree2.right.left.right = new TreeNode(3);

console.log(isIdenticalTrees(tree1, tree2));

function isIdenticalTrees(t1, t2) {
  if ((t1 === null) & (t2 === null)) {
    return true;
  }
  if (t1 === null || t2 === null || t1.val !== t2.val) {
    return false;
  }

  return (
    isIdenticalTrees(t1.left, t2.left) && isIdenticalTrees(t1.right, t2.right)
  );
}
