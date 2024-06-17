/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  let left = 0,
    right = Math.floor(Math.sqrt(c));
  while (left <= right) {
    let sum = left * left + right * right;
    console.log(left, right, sum);
    if (sum === c) return true;
    else if (sum > c) right--;
    else left++;
  }
  return false;
};

console.log(judgeSquareSum(1000));
