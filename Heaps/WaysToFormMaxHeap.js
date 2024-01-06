/*
Problem Description
Max Heap is a special kind of complete binary tree in which, for every node, 
the value present in that node is greater than the value present in its children nodes.

Find the number of distinct Max Heap that can be made from A distinct integers.

In short, you have to ensure the following properties for the max heap :

Heap has to be a complete binary tree 
( A complete binary tree is a binary tree in which every level, except possibly the last, 
    is completely filled, and all nodes are as far left as possible.)
Every node is greater than all its children.

Return your answer modulo 109 + 7.
*/

const MAXN = 105;
let dp = new Array(MAXN).fill(0);
let nCr = new Array(MAXN).fill(0).map(() => new Array(MAXN).fill(0));
let log_2 = new Array(MAXN).fill(0);
const MOD = 1000000007;

function mult(a, b) {
  let val = a * b;
  if (val <= Number.MAX_SAFE_INTEGER && val >= Number.MIN_SAFE_INTEGER)
    return val % MOD;
  return Number((BigInt(a) * BigInt(b)) % BigInt(MOD));
}

function choose(n, k) {
  if (k > n) return 0;
  if (n <= 1) return 1;
  if (k == 0) return 1;

  if (nCr[n][k] != -1) return nCr[n][k];
  let answer = choose(n - 1, k - 1) + choose(n - 1, k);
  answer %= MOD;
  nCr[n][k] = answer;
  return answer;
}

function getL(n) {
  if (n == 1) return 0;

  let h = log_2[n];
  let p = n - ((1 << h) - 1);
  let m = 1 << h;
  if (p >= Math.floor(m / 2)) return (1 << h) - 1;
  else return (1 << h) - 1 - (Math.floor(m / 2) - p);
}

function getNumberOfMaxHeaps(n) {
  if (n <= 1) return 1;

  if (dp[n] != -1) return dp[n];

  let L = getL(n);
  let ans = mult(
    mult(choose(n - 1, L), getNumberOfMaxHeaps(L)),
    getNumberOfMaxHeaps(n - 1 - L)
  );
  ans %= MOD;
  dp[n] = ans;
  return ans;
}

function waysToHeap(n) {
  for (let i = 0; i <= n; i++) dp[i] = -1;

  for (let i = 0; i <= n; i++) for (let j = 0; j <= n; j++) nCr[i][j] = -1;

  let currlog_2Answer = -1;
  let currPower2 = 1;
  for (let i = 1; i <= n; i++) {
    if (currPower2 == i) {
      currlog_2Answer++;
      currPower2 *= 2;
    }
    log_2[i] = currlog_2Answer;
  }
  return +getNumberOfMaxHeaps(n);
}

console.log(waysToHeap(10));
