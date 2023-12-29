function coins(A) {
  let ans = 0;
  let str = '';
  const getCoins = (num) => {
    str += ',' + num;
    if (num < 5) {
      // console.log(ans,num)
      ans += num;
      return;
    }

    let coin = 1;
    for (let i = 1; i <= num; i *= 5) {
      coin = i;
    }

    let val = ~~(num / coin);
    ans += val;
    getCoins(num - val * coin);
  };

  getCoins(A);
  console.log(str, ans);
  return ans;
}

coins(1055);
