function maxXorOf4(A) {
  let maxXorResult = -Infinity;
  const n = A.length;

  const backtrack = (currIndex, noOfElements, currXorResult) => {
    // Base case : When done with 4 elements
    if (noOfElements === 4) {
      maxXorResult = Math.max(maxXorResult, currXorResult);
      return;
    }

    // Base case : When the element is last element
    if (currIndex === n) {
      return;
    }

    // Take current index value
    backtrack(currIndex + 1, noOfElements + 1, currXorResult ^ A[currIndex]);

    // Skip current index value
    backtrack(currIndex + 1, noOfElements, currXorResult);
  };

  backtrack(0, 0, 0);

  return maxXorResult;
}

console.log(maxXorOf4([1, 2, 3, 4]));
console.log(maxXorOf4([0, 2, 3, 1, 5]));
