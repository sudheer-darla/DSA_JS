function sieve(A) {
  let nums = new Array(A + 1).fill(0);
  nums[0] = nums[1] = 1;
  let ans = [];

  for (let i = 2; i * i <= A; i++) {
    for (let j = i * 2; j <= A; j += i) {
      nums[j] = 1;
    }
  }

  //   console.log(nums);

  for (let i = 0; i <= A; i++) {
    if (!nums[i]) ans.push(i);
  }

  console.log(ans);
  return ans;
}

sieve(100);
