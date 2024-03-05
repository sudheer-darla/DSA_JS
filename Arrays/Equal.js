/*
Given an array A of N integers, find the index of values that satisfy P + Q = R + S, where P, Q, R & S are integers values in the array

Expected time complexity O(N2)

NOTE:
1) Return the indices A1 B1 C1 D1, so that 
  A[A1] + A[B1] = A[C1] + A[D1]
  A1 < B1, C1 < D1
  A1 < C1, B1 != D1, B1 != C1 
2) If there are more than one solutions,
   then return the tuple of values which are lexicographical smallest. 

Assume we have two solutions
S1 : A1 B1 C1 D1 ( these are values of indices in the array )
S2 : A2 B2 C2 D2

S1 is lexicographically smaller than S2 if:
  A1 < A2 OR
  A1 = A2 AND B1 < B2 OR
  A1 = A2 AND B1 = B2 AND C1 < C2 OR 
  A1 = A2 AND B1 = B2 AND C1 = C2 AND D1 < D2
If no solution is possible, return an empty list.
*/

function equal(A) {
  const n = A.length;
  const sumIndexMap = new Map();

  // Populate the hashmap with sums and their corresponding indices
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const sum = A[i] + A[j];
      if (!sumIndexMap.has(sum)) {
        sumIndexMap.set(sum, []);
      }
      sumIndexMap.get(sum).push([i, j]);
    }
  }  

  // Iterate through the hashmap to find pairs of indices that satisfy the condition
  for (const [sum, indicesArr] of sumIndexMap) {
    const currLen = indicesArr.length;
    if (currLen >= 2) {
      for (let i = 0; i < currLen; i++) {
        for (let j = i + 1; j < currLen; j++) {
          const [a1, b1] = indicesArr[i];
          const [a2, b2] = indicesArr[j];

          if (a1 < a2 && b1 !== b2 && b1 !== a2) {
            return [a1, b1, a2, b2];
          }
        }
      }
    }
  }

  return [];
}

console.log(equal([3, 4, 7, 1, 2, 9, 8]));
