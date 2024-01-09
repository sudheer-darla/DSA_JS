class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

let t1 = new Node(1);
t1.left = new Node(2);
t1.right = new Node(3);
t1.right.left = new Node(4);
t1.right.left.right = new Node(5);

function Serialize(A) {
  const serializedArray = [];

  const levelTraversal = (node) => {
    const queue = [node];

    while (queue.length > 0) {
      const currLen = queue.length;

      for (let i = 0; i < currLen; i++) {
        const popped = queue.shift();

        if (!popped) {
          serializedArray.push(-1);
        } else {
          serializedArray.push(popped.val);
          queue.push(popped.left, popped.right);
        }
      }
    }
  };

  levelTraversal(A);

  return serializedArray;
}

console.log(Serialize(t1));
