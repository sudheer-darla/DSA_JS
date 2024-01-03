/*
Problem Description
A message containing letters from A-Z is being encoded to numbers using the following mapping:

'A' -> 1
'B' -> 2
...
'Z' -> 26
Given an encoded message denoted by string A containing digits, 
determine the total number of ways to decode it modulo 109 + 7.

Problem Constraints
1 <= length(A) <= 105

Input Format
The first and the only argument is a string A.

Output Format
Return an integer, representing the number of ways to decode the string modulo 109 + 7.
*/

function waysToDecode(s) {
  const MOD = 1e9 + 7;

  if (s == null || s.length === 0) return 0;
  if (s[0] === '0') return 0;

  const dp = new Array(s.length + 1).fill(0);

  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= s.length; i++) {
    const a = Number(s.slice(i - 1, i));
    if (a >= 1 && a <= 9) {
      dp[i] += dp[i - 1];
      dp[i] %= MOD;
    }

    const b = Number(s.slice(i - 2, i));
    if (b >= 10 && b <= 26) {
      dp[i] += dp[i - 2];
      dp[i] %= MOD;
    }
  }
  return dp[s.length] % MOD;
}

console.log(waysToDecode('1234'));
/*
1234 - ABCD
1,23,4 - A,W,D
12,3,4 - L,C,D
*/

console.log(waysToDecode('12'));
