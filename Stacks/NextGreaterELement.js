function nextGreater(A) {
  const n = A.length;
  let nextGreaterArr = new Array(n).fill(-1);
  let stack = [];

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && A[i] > A[stack[stack.length - 1]]) {
      let idx = stack.pop();
      nextGreaterArr[idx] = A[i];
    }
    stack.push(i);
  }

  return nextGreaterArr;
}

console.log(nextGreater([34, 35, 27, 42, 5, 28, 39, 20, 28]));
