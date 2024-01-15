/*
Problem Description

Given a linked list A of length N and an integer B.

You need to find the value of the Bth node from the middle towards the beginning of the Linked List A.

If no such element exists, then return -1.

NOTE:

Position of middle node is: (N/2)+1, where N is the total number of nodes in the list.
*/

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}
//param A : head node of linked list
//param B : integer
//return an integer
function kNodeFromMiddle(A, B) {
  // Helper function to find node count
  const getLength = (head) => {
    let len = 0;
    let curr = head;
    while (curr) {
      len++;
      curr = curr.next;
    }

    return len;
  };

  const n = getLength(A);
  const mid = ~~(n / 2) + 1;

  if (B >= mid) return -1;

  let currNode = A;

  for (let i = 1; i < mid - B; i++) {
    currNode = currNode.next;
  }

  return currNode.data;
}

function addNodeAtEnd(head, node) {
  if (!head) {
    head = node;
    return;
  }
  let curr = head;
  let prev = null;
  while (curr) {
    prev = curr;
    curr = curr.next;
  }
  prev.next = node;
}



//1 -> 14 -> 6 -> 16 -> 4 -> 10
let A1 = new Node(1);
addNodeAtEnd(A1, new Node(14));
addNodeAtEnd(A1, new Node(6));
addNodeAtEnd(A1, new Node(16));
addNodeAtEnd(A1, new Node(4));
addNodeAtEnd(A1, new Node(10));


console.log(kNodeFromMiddle(A1, 2));
console.log(kNodeFromMiddle(A1, 10));
