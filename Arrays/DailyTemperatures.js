/*
Given an array of integers temperatures represents the daily temperatures, 
return an array answer such that 
answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. 
If there is no future day for which this is possible, keep answer[i] == 0 instead.


Example 1:
Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
Example 2:
*/

function dailyTemperatures(A) {
  const n = A.length;
  let ans = Array.from({ length: n }, () => 0);
  let stack = [];

  const isEmpty = (arr) => {
    return arr.length === 0;
  };

  const getTop = (arr) => {
    return arr[arr.length - 1];
  };

  for (let i = n - 1; i >= 0; --i) {
    const currTemp = A[i];
    // possible cases
    // 1. Stack is empty
    if (!isEmpty(stack)) {
      // 2. Stack is not empty      
      while (currTemp >= A[getTop(stack)]) {
        stack.pop();
      }

      if (!isEmpty(stack)) {
        ans[i] = Math.abs(i - getTop(stack));
      }
    }

    stack.push(i);
  }

  return ans;
}

const testCases = [
  {
    input: [73, 74, 75, 71, 69, 72, 76, 73],
    expectedOutput: [1, 1, 4, 2, 1, 1, 0, 0],
  },
  {
    input: [30, 40, 50, 60],
    expectedOutput: [1, 1, 1, 0],
  },
  {
    input: [30, 60, 90],
    expectedOutput: [1, 1, 0],
  },
  {
    input: [89, 62, 70, 58, 47, 47, 46, 76, 100, 70],
    expectedOutput: [8, 1, 5, 4, 3, 2, 1, 1, 0, 0],
  },
  // Add more test cases if needed
];

// Function to check if the output matches the expected result
function testDailyTemperatures() {
  for (const testCase of testCases) {
    const result = dailyTemperatures(testCase.input);
    const pass =
      JSON.stringify(result) === JSON.stringify(testCase.expectedOutput);
    console.log(
      `Test Case: ${testCase.input} | Expected: ${
        testCase.expectedOutput
      } | Result: ${result} | ${pass ? 'Pass' : 'Fail'}`
    );
  }
}

// Run the tests
testDailyTemperatures();
