/*
Problem Description
Misha loves eating candies. She has been given N boxes of Candies.

She decides that every time she will choose a box having the minimum number of candies, 
eat half of the candies and put the remaining candies in the other box 
that has the minimum number of candies.
Misha does not like a box if it has the number of candies greater than B so she won't eat from that box. 
Can you find how many candies she will eat?

NOTE 1: If a box has an odd number of candies then Misha will eat the floor(odd / 2).

NOTE 2: The same box will not be chosen again.
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

function candies(A, B) {
  let minHeap = new MinHeap();
  let consumedCandyCount = 0;
  //   Create a minHeap with all candies available
  for (let candyCount of A) {
    minHeap.push(candyCount);
  }

  console.log(minHeap.heap);
  // keep on reducing the candies from the minElement from the heap
  let currMin = minHeap.getMin();
  while (currMin <= B) {
    let eatenCandies = Math.floor(currMin / 2);
    consumedCandyCount += eatenCandies;
    const remainingCandies = currMin - eatenCandies;
    let nextMin = minHeap.getMin();
    minHeap.push(nextMin + remainingCandies);
    currMin = minHeap.getMin();
  }

  console.log(consumedCandyCount);
  return consumedCandyCount;
}

candies([3, 2, 3], 4);
candies(
  [
    9, 818, 174, 237, 892, 109, 522, 27, 59, 336, 605, 865, 714, 86, 708, 535,
    138, 948, 836, 287, 179, 754, 466, 856, 153, 53, 958, 951, 262, 341, 769,
    491, 772, 509, 336, 120, 98, 805, 169, 984, 520, 447, 256, 266, 348, 351,
    60, 563, 45, 638, 29, 479, 400,
  ],
  852
);
