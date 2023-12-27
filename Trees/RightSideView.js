class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// [1,2,3,null,5,null,4]
//[1,null,3]
const t1 = new Node(1);
t1.left = new Node(2);
t1.right = new Node(3);
t1.right.right = new Node(4);
t1.left.right = new Node(5);

const t2 = new Node(1);
t2.right = new Node(3);

function rightSideView(root) {
  if (!root) return [];
  let queue = [];
  const rightSideViewArr = [];
  queue.push(root);

  while (queue.length > 0) {
    const currLen = queue.length;
    let rightMostNode = queue[currLen - 1];
    rightSideViewArr.push(rightMostNode.val);
    for (let i = 0; i < currLen; i++) {
      const popped = queue.shift();
      if (popped.left) queue.push(popped.left);
      if (popped.right) queue.push(popped.right);
    }
  }

  console.log(rightSideViewArr);
  return rightSideViewArr;
}

rightSideView(t1);
rightSideView(t2);
rightSideView(null);
