// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let arr = [-10, -3, 0, 5, 9];

function sortedArrayToBST(A) {
  const n = A.length;

  const helper = (l, r) => {
    if (l > r) {
      return null;
    }

    const mid = ~~((l + r) / 2);
    const root = new Node(arr[mid]);

    root.left = helper(l, mid - 1);
    root.right = helper(mid + 1, r);

    return root;
  };

  return helper(0, n - 1);
}

console.log(sortedArrayToBST(arr));
