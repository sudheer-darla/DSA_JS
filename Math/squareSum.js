function squareSum(A) {
  ans = [];
  let a = 0;
  while (a * a < A) {
    let b = 0;
    while (b * b < A) {
      if (a * a + b * b == A && a <= b) {
        t = new Array(2);
        t[0] = a;
        t[1] = b;
        ans.push(t);
      }
      b += 1;
    }
    a += 1;
  }
  return ans;
}

console.log(squareSum(5));
