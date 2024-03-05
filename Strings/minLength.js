/*
Given a string s consisting only of characters 'a', 'b', and 'c'. You are asked to apply the following algorithm on the string any number of times:

1. Pick a non-empty prefix from the string s where all the characters in the prefix are equal.
2. Pick a non-empty suffix from the string s where all the characters in this suffix are equal.
3. The prefix and the suffix should not intersect at any index.
4. The characters from the prefix and suffix must be the same.
5. Delete both the prefix and the suffix.
Return the minimum length of s after performing the above operation any number of times (possibly zero times).
*/

/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
  const n = s.length;

  const recursiveHelper = (start, end) => {
    // Base cases:
    // both start and end meet
    if (start === end) return 1;

    // start and end crosses each other
    if (start > end) return 0;

    // if the prefix and suffix are not same characters
    if (s[start] !== s[end]) return end - start + 1;

    while (start < n && s[start] === s[start + 1]) {
      start++;
    }

    while (end >= 0 && s[end] === s[end - 1]) {
      end--;
    }

    return recursiveHelper(start + 1, end - 1);
  };

  return recursiveHelper(0, n - 1);
};

console.log(minimumLength('aabccabba'));
console.log(minimumLength('cabaabac'));
console.log(minimumLength('ca'));
console.log(minimumLength('abba'));
console.log(minimumLength('abcba'));
