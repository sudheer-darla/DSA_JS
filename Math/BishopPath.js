function bishopPath(A, B) {
  let ans = 0;

  for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= 8; j++) {
      if (i + j === A + B || i - j === A - B) {
        ans++;
      }
    }
  }

  console.log(ans);
  return ans - 1;
}

bishopPath(2, 4);
