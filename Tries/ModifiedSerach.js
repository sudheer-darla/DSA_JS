const mx = 26;

class Node {
  constructor() {
    this.isEnd = false;
    this.next = new Array(mx).fill(null);
    this.cnt = 0;
  }
}

let rot = new Node();
function insert(s) {
  let cur = rot;
  let number;
  [...s].forEach((ele) => {
    number = ele.charCodeAt(0) - 97;
    if (cur.next[number] == null) cur.next[number] = new Node();
    cur = cur.next[number];
    cur.cnt++;
  });
  cur.isEnd = 1;
}

function freeTrie(cur) {
  if (cur == null) return;
  for (let i = 0; i < 26; i++) freeTrie(cur.next[i]), (cur.next[i] = null);
}

function dfs(cur, pos, word, modification) {
  if (pos == word.length) return modification == 1 && cur.isEnd ? 1 : 0;
  let ans = 0;
  for (let i = 0; i < 26; i++) {
    let val = modification + (word[pos].charCodeAt(0) - 97 == i ? 0 : 1);
    if (val <= 1 && cur.next[i]) ans |= dfs(cur.next[i], pos + 1, word, val);
  }
  return ans;
}

const modifiedSearch = (A, B) => {
  freeTrie(rot);
  rot = new Node();
  A.forEach((ele) => insert(ele));

  let c = '';
  B.forEach((ele) => (c += dfs(rot, 0, ele, 0)));
  return c;
};
