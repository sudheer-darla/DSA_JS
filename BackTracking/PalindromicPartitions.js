function isPalindrome(s, l, r) {
  const n = s.length;
  if (n === 0 || n === 1) return true;

  while (l <= r) {
    if (s[l] !== s[r]) return false;
    l++, r--;
  }

  return true;
}

function doPartition(idx, currPart, len, str, ans) {
  // Base case
  if (idx === len) {
    ans.push([...currPart]);
    return;
  }

  for (let i = idx; i < len; i++) {
    if (isPalindrome(str, idx, i)) {
      currPart.push(str.substring(idx, i + 1));
      doPartition(i + 1, currPart, len, str, ans);
      currPart.pop();
    }
  }
}

function partition(A) {
  const n = A.length;
  let ans = [];
  doPartition(0, [], n, A, ans);
  return ans;
}

console.log(partition('aab'))
