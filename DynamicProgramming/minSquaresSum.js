function minSquareSum(num) {
  let ans = Infinity;

  //   Base cases
  if (num === 0) return 0;
  if (num === 1) return 1;

  //   Check all possibilities
  for (let i = 1; i * i <= num; i++) {
    ans = Math.min(ans, 1 + minSquareSum(num - i * i));
  }

  return ans;
}

console.log(minSquareSum(30));
