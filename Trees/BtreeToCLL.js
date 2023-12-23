/*
Problem Description
Given a binary tree convert it into circular doubly linked list based on the following rules:

The left and right pointers in nodes are to be used as previous and next pointers respectively in converted Circular Linked List.
The order of nodes in List must be same as Inorder of the given Binary Tree.
The first node of Inorder traversal must be the head node of the Circular List.
NOTE: You are expected to convert the binary tree into Doubly linked list in place.

Problem Constraints
0 <= Number of nodes in tree <= 100000
1 <= Value of node <= 109

Input Format
The only argument given is the root pointer of the tree, A.

Output Format
Return the head pointer of the converted circular doubly linked list.
*/

// TreeNode class represents a node in the binary tree
class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

// BtreeToCLL function takes the root of a binary tree as input and converts it to a circular doubly linked list
function BtreeToCLL(A) {
  // Create a dummy node to simplify the circular list handling
  let dummy = new TreeNode(-1);

  // 'current' is a pointer used to traverse the list and make connections
  let current = dummy;

  // Helper function to recursively convert the binary tree to a circular doubly linked list
  const convertHelper = (node) => {
    // Base case: If the current node is null, return
    if (node == null) return;

    // Convert left subtree
    convertHelper(node.left);

    // Link the nodes:
    // Connect the current node to the previous one
    // (current.right points to the current node, node.left points to the previous node)
    current.right = node;
    node.left = current;

    // Move 'current' pointer to the newly linked node (advance to the right)
    current = current.right;

    // Convert right subtree
    convertHelper(node.right);
  };

  // Start the conversion process from the root of the binary tree
  convertHelper(A);

  // Final connections to make the list circular
  let head = dummy.right; // The 'head' of the circular doubly linked list is the right child of the dummy node
  current.right = head; // Connect the last node to the head to complete the circular structure

  // Return the head of the circular doubly linked list
  return head;
}

// Example usage:
// Create a binary tree
const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(5);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);

// Convert the binary tree to a circular doubly linked list
const circularDLLHead = BtreeToCLL(root);

// Print the circular doubly linked list
let current = circularDLLHead;
do {
  console.log(current.val);
  current = current.right;
} while (current !== circularDLLHead);

console.log(circularDLLHead);
