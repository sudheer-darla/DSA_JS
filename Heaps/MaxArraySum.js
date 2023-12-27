/*
Problem Description
Given an array of integers A and an integer B. 
You must modify the array exactly B number of times. 
In a single modification, we can replace any one array element A[i] by -A[i].

You need to perform these modifications in such a way that after exactly B modifications, 
sum of the array must be maximum.

NOTE: You can perform the modification on the same element multiple times.

Problem Constraints
1 <= length of the array <= 5*105
1 <= B <= 5 * 106
-100 <= A[i] <= 100

Input Format
The first argument given is an integer array A.
The second argument given is an integer B.
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
}

function maxArraySumAfterBnegations(A, B) {
  let minHeap = new MinHeap();
  let maxSum = 0;
  for (let i = 0; i < A.length; i++) {
    minHeap.push(A[i]);
  }

  for (let i = 0; i < B; i++) {
    let currMin = minHeap.getMin();
    const newVal = currMin * -1;
    minHeap.push(newVal);
  }

  for (let i = 0; i < A.length; i++) {
    maxSum += minHeap.getMin();
  }

  console.log(maxSum);
  return maxSum;
}

let A = [57, 3, -14, -87, 42, 38, 31, -7, -28, -61];
let B = 10;

maxArraySumAfterBnegations(A, B);
