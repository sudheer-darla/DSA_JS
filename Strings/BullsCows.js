/*
You are playing the Bulls and Cows game with your friend.

You write down a secret number and ask your friend to guess what the number is. When your friend makes a guess, you provide a hint with the following info:

The number of "bulls", which are digits in the guess that are in the correct position.
The number of "cows", which are digits in the guess that are in your secret number but are located in the wrong position. 
Specifically, the non-bull digits in the guess that could be rearranged such that they become bulls. 
Given the secret number secret and your friend's guess guess, return the hint for your friend's guess.

The hint should be formatted as "xAyB", where x is the number of bulls and y is the number of cows. Note that both secret and guess may contain duplicate digits.
*/

//param A : string
//param B : string
//return a strings
function bullsCows(A, B) {
  const n = A.length;

  let bulls = 0;
  let cows = 0;

  let map = {};

  for (let i = 0; i < n; i++) {
    map[A[i]] = (map[A[i]] || 0) + 1;
  }

  for (let i = 0; i < n; i++) {
    if (A[i] === B[i]) {
      bulls++;
      map[B[i]]--;
    } else {
      if (A[i] !== B[i] && map[B[i]] && map[B[i]] > 0) {
        cows++;
        map[B[i]]--;
      }
    }
  }

  return '' + bulls + 'A' + cows + 'B';
}

console.log(bullsCows('3978973343647409', '1890771099992259'));
