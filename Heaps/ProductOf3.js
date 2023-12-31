/*
Problem Description
Given an integer array A of size N.

You have to find the product of the three largest integers in array A from range 1 to i, 
where i goes from 1 to N.

Return an array B where B[i] is the product of the largest 3 integers in range 1 to i in array A. 
If i < 3, then the integer at index i in B should be -1.
*/

class MinHeap {
  constructor() {
    this.heap = [];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  push(val) {
    this.heap.push(val);
    this.heapifyUp();
  }

  getMin() {
    const min = this.heap[0];
    this.swap(0, this.getLastIdx());
    this.heap.pop();
    this.heapifyDown();
    return min;
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
      if (this.heap[parentIdx] > this.heap[currLevel]) {
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
        ? this.heap[leftIdx] < this.heap[rightIdx]
          ? leftIdx
          : rightIdx
        : leftIdx;

      // Send the parent downward
      if (this.heap[start] > this.heap[minIdx]) {
        this.swap(start, minIdx);
        start = minIdx;
      } else {
        return;
      }
    }
  }

  getHeapProduct() {
    let prod = 1;
    for (let item of this.heap) {
      prod *= item;
    }

    return prod;
  }
  topElement() {
    return this.heap[0];
  }
}

function productOf3(A) {
  let prodArray = new Array(A.length).fill(-1);
  let minHeap = new MinHeap();
  for (let i = 0; i < 3; i++) {
    minHeap.push(A[i]);
  }

  prodArray[2] = minHeap.getHeapProduct();

  for (let i = 3; i < A.length; i++) {
    if (minHeap.topElement() < A[i]) {
      minHeap.getMin();
      minHeap.push(A[i]);
    }
    prodArray[i] = minHeap.getHeapProduct();
  }

  console.log(prodArray);
}

productOf3([1, 2, 3, 4, 5]);
productOf3([10, 2, 13, 4]);
