/*
You are given the root of a binary tree with unique values, and an integer start. 
At minute 0, an infection starts from the node with value start.

Each minute, a node becomes infected if:

The node is currently uninfected.
The node is adjacent to an infected node.
Return the number of minutes needed for the entire tree to be infected.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var t1 = new Node(1);
t1.left = new Node(5);
t1.right = new Node(3);
t1.left.right = new Node(4);
t1.right.left = new Node(10);
t1.right.right = new Node(6);
t1.left.right.left = new Node(9);
t1.left.right.right = new Node(2);

function infectTime(root, start) {
  let neighborNodes = {};
  let minutes = 0;
  const getNeighbors = (root, parent, neighborMap) => {
    if (!root) {
      return;
    }

    let currentNeighbors = parent ? [parent] : [];
    if (root.left) currentNeighbors.push(root.left.val);
    if (root.right) currentNeighbors.push(root.right.val);
    neighborMap[root.val] = [...currentNeighbors];

    getNeighbors(root.left, root.val, neighborMap);
    getNeighbors(root.right, root.val, neighborMap);
  };

  getNeighbors(root, null, neighborNodes);

  let infectedStatus = {};
  for (let key in neighborNodes) {
    infectedStatus[key] = false;
  }

  let neighborsQueue = neighborNodes[start];
  infectedStatus[start] = true;
  while (neighborsQueue.length > 0) {
    let currentLen = neighborsQueue.length;
    for (let i = 0; i < currentLen; i++) {
      let currNeighbor = neighborsQueue.shift();
      // Mark the neighbor as infected
      if (!infectedStatus[currNeighbor]) {
        infectedStatus[currNeighbor] = true;
        // Add neighbours of current popped node
        let neighborsOfCurrNode = neighborNodes[currNeighbor];
        for (let neighbor of neighborsOfCurrNode) {
          // Process only uninfected nodes
          if (!infectedStatus[neighbor]) {
            neighborsQueue.push(neighbor);
          }
        }
      }
    }
    // Increment time
    minutes++;
  }
  return minutes;
}

infectTime(t1, 3);
