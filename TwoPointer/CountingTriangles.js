// https://www.interviewbit.com/problems/counting-triangles/

function CountTriangles(A) {
  const mod = 10 ** 9 + 7;
  let trianglesCount = 0;

  // Base cases
  const n = A.length;
  if (n < 3) return 0;
  // sort the array
  A.sort((side1, side2) => side1 - side2);

  for (let idx = 2; idx < n; idx++) {
    // set the pointers
    let left = 0,
      right = idx - 1;
    while (left < right) {
      if (A[left] + A[right] > A[idx]) {
        // All the sides from left to right can form a triangle with idx
        trianglesCount = (trianglesCount + right - left) % mod;
        right--;
      } else {
        left++;
      }
    }
  }

  return trianglesCount;
}

console.log(CountTriangles([1, 1, 1]));
console.log(CountTriangles([1, 1, 1, 2, 2]));
console.log(CountTriangles([1, 1]));
