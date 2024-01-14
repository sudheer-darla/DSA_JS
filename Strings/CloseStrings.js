/*
Two strings are considered close if you can attain one from the other using the following operations:

Operation 1: Swap any two existing characters.
For example, abcde -> aecdb
Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
You can use the operations on either string as many times as necessary.

Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

 

Example 1:

Input: word1 = "abc", word2 = "bca"
Output: true
Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: "abc" -> "acb"
Apply Operation 1: "acb" -> "bca"

Constraints:
1 <= word1.length, word2.length <= 105
word1 and word2 contain only lowercase English letters.
*/

function closeStrings(word1, word2) {
  const n1 = word1.length;
  const n2 = word2.length;
  // Base cases
  // Lengths must be equal
  if (n1 !== n2) return false;

  let freqMap1 = {},
    freqMap2 = {};
  for (let i = 0; i < n1; i++) {
    const ch1 = word1[i];
    const ch2 = word2[i];
    freqMap1[ch1] = (freqMap1[ch1] || 0) + 1;
    freqMap2[ch2] = (freqMap2[ch2] || 0) + 1;
  }

  // Inorder to satisfy close strings condition, the characters must present in both strings
  // and frequencies shoulb be same

  //   Helper function to compare frequencies of given words
  const isArraysEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    if (!arr1.every((t) => arr2.includes(t))) return false;

    return true;
  };
  if (!isArraysEqual(Object.values(freqMap1), Object.values(freqMap2))) {
    return false;
  }
  //   Now check characters
  for (let key in freqMap1) {
    if (!freqMap2[key]) {
      return false;
    }
  }

  return true;
}

console.log(closeStrings('abcde', 'aecdb'));
console.log(closeStrings('cabbba', 'abbccc'));
console.log(closeStrings('acc', 'cac'));
console.log(closeStrings('abc', 'bca'));
