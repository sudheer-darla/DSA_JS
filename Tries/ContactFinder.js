class TrieNode {
  constructor(val) {
    this.val = val;
    this.next = {};
    this.count = 0;
  }
}

let trie = new TrieNode('#');

const BuildTrie = (wordArr) => {
  for (let word of wordArr) {
    constructTrie(word);
  }
};
const constructTrie = (word) => {
  let root = trie;
  for (let ch of word) {
    if (!root.next[ch]) {
      let newNode = new TrieNode(ch);
      root.next[ch] = newNode;
    }
    root.next[ch].count++;
    root = root.next[ch];
  }
};

const findCount = (word) => {
  let root = trie;
  for (let ch of word) {
    if (root.next[ch]) {
      root = root.next[ch];
    } else {
      return 0;
    }
  }

  return root.count;
};

const contactFinder = (A, B) => {
  let resultArr = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      constructTrie(B[i]);
    } else {
      resultArr.push(findCount(B[i]));
    }
  }

  console.log(resultArr);
  return resultArr;
};

// Usage
contactFinder([0, 0, 1, 1], ['hack', 'hacker', 'hac', 'hak']);
contactFinder([0, 1], ['abcde', 'abc']);

/*
Explaination: 
We perform the following sequence of operations:
Add a contact named "hack".
Add a contact named "hacker".
Find the number of contact names beginning with "hac". 
There are currently two contact names in the application and both of them start with "hac", so we have 2.
Find the number of contact names beginning with "hak". 
There are currently two contact names in the application but neither of them start with "hak", so we get0.
*/
