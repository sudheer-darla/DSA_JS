/*
Problem Description
Given an array A of N numbers, you have to perform B operations. 
In each operation, you have to pick any one of the N elements and add the original value(value stored at the index before we did any operations) to its current value. You can choose any of the N elements in each operation.

Perform B operations in such a way that the largest element of the modified array(after B operations) is minimized.
Find the minimum possible largest element after B operations.
*/

class MinHeap {
  constructor() {
    this.heap = [];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  push(item) {
    this.heap.push(item);
    this.heapifyUp();
  }

  getMin() {
    const minItem = this.heap[0];
    this.swap(0, this.getLastIdx());
    this.heap.pop();
    this.heapifyDown();
    return minItem;
  }

  getParentIdx(childIdx) {
    return Math.floor((childIdx - 1) / 2);
  }

  getLeftChildIdx(parentIdx) {
    return 2 * parentIdx + 1;
  }

  getRightChildIdx(parentIdx) {
    return 2 * (parentIdx + 1);
  }

  getLastIdx() {
    return this.isEmpty() ? -1 : this.heap.length - 1;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  heapifyUp() {
    let currLevel = this.getLastIdx();
    while (currLevel > 0) {
      const parentIdx = this.getParentIdx(currLevel);
      if (this.heap[parentIdx].val > this.heap[currLevel].val) {
        // Swap them
        this.swap(parentIdx, currLevel);
        currLevel = parentIdx;
      } else {
        return;
      }
    }
  }

  heapifyDown() {
    let start = 0;
    while (start < this.getLastIdx()) {
      let leftIdx = this.getLeftChildIdx(start);
      if (leftIdx > this.getLastIdx()) return;
      let rightIdx = this.getRightChildIdx(start);
      if (rightIdx > this.getLastIdx()) rightIdx = null;

      //   Get the smallest child index
      const minIdx = rightIdx
        ? this.heap[leftIdx].val < this.heap[rightIdx].val
          ? leftIdx
          : rightIdx
        : leftIdx;

      // Send the parent downward
      if (this.heap[start].val > this.heap[minIdx].val) {
        this.swap(start, minIdx);
        start = minIdx;
      } else {
        return;
      }
    }
  }
}

//param A : array of integers
//param B : integer
//return an integer
function MinPossibleLargeElement(A, B) {
  let minHeap = new MinHeap();
  let minPossibleLargesetElement = 0;

  for (let i = 0; i < A.length; i++) {
    minHeap.push({ val: A[i], index: i });
  }

  for (let i = 0; i < B; i++) {
    let pickedElement = minHeap.getMin();
    let updatedELement = {
      val: pickedElement.val + A[pickedElement.index],
      index: pickedElement.index,
    };
    console.log(updatedELement);
    minHeap.push(updatedELement);
  }

  for (let i = 0; i < A.length; i++) {
    minPossibleLargesetElement = minHeap.getMin();
  }

  console.log(minPossibleLargesetElement);
  return minPossibleLargesetElement.val;
}

// MinPossibleLargeElement([1, 2, 3, 4], 3);
// MinPossibleLargeElement([5, 7, 8], 9);
MinPossibleLargeElement([8, 6, 4, 2], 8);
