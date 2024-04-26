//param A : string
//param B : string
//return a strings
const multiply = (A, B) => {
  const n = A.length;
  const m = B.length;
  let prod = new Array(n + m).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      let num = +A[i] * +B[j] + +prod[i + j + 1];
      prod[i + j + 1] = num % 10;
      prod[i + j] += ~~(num / 10);
    }
  }

  for (let i = 0; i < prod.length; i++) {
    if (prod[i] != 0) return prod.slice(i).join('');
  }
  return '0';
};

console.log(multiply('25', '25'));
