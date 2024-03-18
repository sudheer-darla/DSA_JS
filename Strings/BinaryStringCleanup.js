/*
Problem Description:
Ryan was tidying up his house for the party when he stumbled upon a messy string hidden under the carpets. 
Eager to clean it up in a precise and stylish manner, he decided to make it as clean as possible using a specific set of moves.
The string, denoted as s, is a binary string of length n, consisting solely of 0s and 1s. 
Ryan can perform a move by selecting two consecutive characters si and si+1. If si is 1 and si+1 is 0, 
he can erase exactly one of them. The string shrinks after each erasure.

Ryan can make an arbitrary number of moves (possibly zero) and aims to create the cleanest possible string. 
He defines cleanliness such that for two different strings x and y, the shorter string is considered cleaner. 
If the lengths are the same, the lexicographically smaller string is cleaner.

Your task is to print the cleanest possible string that Ryan can obtain by performing some number of moves.


Problem Constraints
1 =< n <= 105


Input Format
The first argument is the string.


Output Format
Return the cleanest string Ryan can achieve after performing some number of moves (possibly zero).


Example Input
Input 1:
10
0001111111
Input 2:
4
0101

Example Output
Output 1:
0001111111
Output 2:
001


Example Explanation
For Input 1:
Ryan can't perform any moves.

For Input 2:
Ryan should erase s2.
*/

function cleanup(A) {
  // Function to check if a string is non-decreasing
  function isNonDecreasing(str) {
    for (let i = 1; i < str.length; i++) {
      if (str[i] < str[i - 1]) {
        return false;
      }
    }
    return true;
  }

  // If the string is already non-decreasing, return it as it is the cleanest string
  if (isNonDecreasing(A)) {
    return A;
  }

  // Count the number of leading zeroes (x) and trailing ones (y) in the string
  let x = 0;
  while (x < A.length && A[x] === '0') {
    x++;
  }
  let y = 0;
  let i = A.length - 1;
  while (i >= 0 && A[i] === '1') {
    y++;
    i--;
  }

  // Construct the cleanest string as x+1 zeroes followed by y ones
  return '0'.repeat(x + 1) + '1'.repeat(y);
}
