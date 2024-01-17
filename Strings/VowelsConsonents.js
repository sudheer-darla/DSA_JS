/*
Given a string A consisting of lowercase characters.

You have to find the number of substrings in A which starts with vowel and end with consonants or vice-versa.

Return the count of substring modulo 109 + 7.



Problem Constraints
1 <= |A| <= 105

A consists only of lower-case characters.
*/

// param A: string
// return an integer
function findCount(A) {
  const n = A.length;
  // Edge case - single character
  if (n === 1) return 0;

  const mod = 10 ** 9 + 7;
  let vowelsPrefix = [];
  let consonantsPrefix = [];
  let type1Count = 0,
    type2Count = 0;

  const isVowel = (ch) => {
    return 'aeiouAEIOU'.includes(ch);
  };

  const getConsonants = (start, end) => {
    return start
      ? consonantsPrefix[end] - consonantsPrefix[start]
      : consonantsPrefix[end];
  };

  const getVowels = (start, end) => {
    return start ? vowelsPrefix[end] - vowelsPrefix[start] : vowelsPrefix[end];
  };

  vowelsPrefix.push(+isVowel(A[0]));
  consonantsPrefix.push(+!isVowel(A[0]));

  for (let i = 1; i < n; i++) {
    vowelsPrefix[i] = isVowel(A[i])
      ? (vowelsPrefix[i - 1] + 1) % mod
      : vowelsPrefix[i - 1];
    consonantsPrefix[i] = isVowel(A[i])
      ? consonantsPrefix[i - 1]
      : (consonantsPrefix[i - 1] + 1) % mod;
  }

  for (let i = 0; i < n - 1; i++) {
    if (isVowel(A[i])) {
      type1Count = (type1Count + getConsonants(i, n - 1)) % mod;
    } else {
      type2Count = (type2Count + getVowels(i, n - 1)) % mod;
    }
  }

  return ((type1Count % mod) + (type2Count % mod)) % mod;
}

console.log(findCount('inttnikjmjbemrberk'));
