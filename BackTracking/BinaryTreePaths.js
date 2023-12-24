/*
Given the root of a binary tree, return all root-to-leaf paths in any order.

A leaf is a node with no children.
*/

function binaryTreePaths(root) {
  if (root === null) return [''];
  let treePathArr = [];
  let currentPath = [];
  const backTrackPath = (root, currentPathArr) => {
    // Base case
    if (!root.left & !root.right) {
      currentPathArr.push(root.val);
      treePathArr.push([...currentPathArr].join('->'));
      return;
    }

    // Possibilities
    currentPathArr.push(root.val);
    if (root.left) {
      backTrackPath(root.left, currentPathArr);
      currentPathArr.pop();
    }
    if (root.right) {
      backTrackPath(root.right, currentPathArr);
      currentPathArr.pop();
    }
  };

  backTrackPath(root, currentPath);
  //   console.log(treePathArr);

  return treePathArr;
}
