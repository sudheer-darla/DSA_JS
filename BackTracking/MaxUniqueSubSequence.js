/*
You are given an array of strings arr. 
A string s is formed by the concatenation of a subsequence of arr that has unique characters.

Return the maximum possible length of s.

A subsequence is an array that can be derived from another array by 
deleting some or no elements without changing the order of the remaining elements. 

Example 1:
Input: arr = ["un","iq","ue"]
Output: 4
Explanation: All the valid concatenations are:
- ""
- "un"
- "iq"
- "ue"
- "uniq" ("un" + "iq")
- "ique" ("iq" + "ue")
Maximum length is 4.
*/

/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
  const n = arr.length;
  let maxSubSequenceLen = 0;

  const hasDistinctChars = (str) => {
    if (str.length === 0 || str.length === 1) return 1;
    const distinctChars = new Set(str.split(''));
    return distinctChars.size === str.length;
  };

  const checkSubSequence = (idx, currString, arr, max) => {
    // basecases
    if (hasDistinctChars(currString)) {
      maxSubSequenceLen = Math.max(maxSubSequenceLen, currString.length);
    }

    if (idx === max) {
      return;
    }

    if (!hasDistinctChars(currString)) {
      return;
    }

    //Explore subsequences
    for (let i = idx; i < max; i++) {
      checkSubSequence(i + 1, currString + arr[i], arr, max);
    }
  };

  checkSubSequence(0, '', arr, n);
  return maxSubSequenceLen;
};

console.log(maxLength(['cha', 'r', 'act', 'ers']));
