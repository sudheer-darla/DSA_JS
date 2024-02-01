/*
Jesse loves cookies and wants the sweetness of some cookies to be greater than value . 
To do this, two cookies with the least sweetness are repeatedly mixed. 
This creates a special combined cookie with:
sweetness = (1 x Least sweet cookie) + (2 x 2nd least sweet cookie).

This occurs until all the cookies have a sweetness .

Given the sweetness of a number of cookies, determine the minimum number of operations required. 
If it is not possible, return .
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

  getTop() {
    const top = this.heap[0];
    return top;
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

  size() {
    return this.heap.length;
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
function cookies(k, A) {
  // Write your code here
  // Use minHeaps
  let minHeap = new MinHeap();
  let count = 0;
  for (let sweetness of A) {
    minHeap.push(sweetness);
  }

  while (k > minHeap.getTop() && minHeap.size() >= 2) {
    const first = minHeap.getMin();
    const second = minHeap.getMin();
    const newSweetness = first + 2 * second;
    minHeap.push(newSweetness);
    count++;
  }

  return k > minHeap.getTop() ? -1 : count;
}

console.log(cookies(7, [1, 2, 3, 9, 10, 12]));
