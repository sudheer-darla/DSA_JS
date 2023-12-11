class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

//param A : root node of tree
//param B : integer
//param C : integer
//return an integer
function distnceBetweenNodes(A, B, C) {
  let pathB = [],
    pathC = [];
  const getPath = (root, key, path) => {
    if (key === root.data) {
      path.push(root.data);
      return path;
    }
    path.push(root.data);
    key > root.data
      ? getPath(root.right, key, path)
      : getPath(root.left, key, path);
  };

  const getDistance = (p1, p2) => {
    let start = 0;
    const len1 = p1.length;
    const len2 = p2.length;
    if (len1 === 0) return len2;
    if (len2 === 0) return len1;
    while (p1[start] === p2[start] && start < len1 && start < len2) {
      start++;
    }

    if (start == len1) return len2 - start;
    if (start == len2) return len1 - start;
    return len1 + len2 - 2 * start;
  };

  getPath(A, B, pathB);
  getPath(A, C, pathC);
  console.log(pathB, pathC);
  return getDistance(pathB, pathC);
}

let t1 = new TreeNode(23);
t1.left = new TreeNode(16);
t1.right = new TreeNode(38);
t1.left.left = new TreeNode(8);
t1.left.right = new TreeNode(18);
t1.right.left = new TreeNode(32);
t1.right.right = new TreeNode(40);

let t2 = new TreeNode(32);
t2.left = new TreeNode(25);
t2.right = new TreeNode(46);
t2.left.left = new TreeNode(17);
t2.left.right = new TreeNode(27);
t2.right.left = new TreeNode(40);
t2.right.right = new TreeNode(49);
t2.left.left.left = new TreeNode(9);

console.log(distnceBetweenNodes(t2, 32, 9));
console.log(distnceBetweenNodes(t1, 23, 38));
