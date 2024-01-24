/*
Given a binary tree where node values are digits from 1 to 9. 
A path in the binary tree is said to be pseudo-palindromic if at least one permutation of the node values 
in the path is a palindrome.

Return the number of pseudo-palindromic paths going from the root node to leaf nodes.

https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/description/?envType=daily-question&envId=2024-01-24 

*/
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var pseudoPalindromicPaths = function (root) {
  let count = 0;
  let stack = [[root, 0]];

  while (stack.length > 0) {
    let [node, path] = stack.pop();

    if (node !== null) {
      path ^= 1 << node.val;

      if (node.left === null && node.right === null) {
        if ((path & (path - 1)) === 0) {
          count += 1;
        }
      } else {
        stack.push([node.right, path]);
        stack.push([node.left, path]);
      }
    }
  }

  return count;
};

[8, 8, null, 7, 7, null, null, 2, 4, null, 8, null, 7, null, 1];
/*
           8
          / \
         8   null
        / \
       7   7
          / \
         2   null
        / \
       4   8
          /
         7
          \
           1

*/

const t1 = new Node(8);
t1.left = new Node(8);
t1.left.left = new Node(7);
t1.left.right = new Node(7);
t1.left.right.left = new Node(2);
t1.left.right.left.left = new Node(4);
t1.left.right.left.right = new Node(8);
t1.left.right.left.right.left = new Node(7);
t1.left.right.left.right.left.right = new Node(1);

console.log(pseudoPalindromicPaths(t1));
