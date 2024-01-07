/*
Problem Description

Given a sorted array A containing N integers both positive and negative.

You need to create another array containing 
the squares of all the elements in A and return it in non-decreasing order.

Try to this in O(N) time.


Problem Constraints
1 <= N <= 105.

-103 <= A[i] <= 103
*/

function squaresArray(A) {
  let positiveIdx = 0;
  let squaresArr = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] < 0) {
      positiveIdx++;
    }
  }

  let negativeIdx = positiveIdx - 1;
  // Move negativeIdx to left and positiveIdx to right
  while (positiveIdx < A.length && negativeIdx >= 0) {
    let positiveSquare = A[positiveIdx] ** 2;
    let negativeSquare = A[negativeIdx] ** 2;

    if (positiveSquare < negativeSquare) {
      squaresArr.push(positiveSquare);
      positiveIdx++;
    } else {
      squaresArr.push(negativeSquare);
      negativeIdx--;
    }
  }

  while (negativeIdx >= 0) {
    squaresArr.push(A[negativeIdx] ** 2);
    negativeIdx--;
  }

  while (positiveIdx < A.length) {
    squaresArr.push(A[positiveIdx] ** 2);
    positiveIdx++;
  }

  return squaresArr;
}

console.log(squaresArray([-5, -4, -3, 0, 1]));
