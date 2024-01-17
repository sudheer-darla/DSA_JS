function longestValidParentheses(A) {
  const n = A.length;
  const stack = [-1]; // Initialize stack with -1 to handle edge cases
  let maxLength = 0;

  for (let i = 0; i < n; ++i) {
    if (A[i] === '(') {
      stack.push(i); // Open parenthesis; mark start index
    } else {
      stack.pop(); // Close parenthesis; remove a start index

      if (!stack.length) {
        stack.push(i); // Invalid; reset index to new start
      } else {
        maxLength = Math.max(maxLength, i - stack[stack.length - 1]); // Valid; update length
      }
    }
  }

  return maxLength;
}

console.log(longestValidParentheses(')()())'));
