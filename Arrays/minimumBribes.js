/*
It is New Year's Day and people are in line for the Wonderland rollercoaster ride. 
Each person wears a sticker indicating their initial position in the queue from 1 to n. 
Any person can bribe the person directly in front of them to swap positions, 
but they still wear their original sticker. One person can bribe at most two others.

Determine the minimum number of bribes that took place to get to a given queue order. 
Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.
*/

function minimumBribes(A) {
  let bribes = 0;
  for (let i = 0; i < A.length; i++) {
    let expectedIndex = A[i] - 1;
    if (expectedIndex - i > 2) {
      console.log('Too chaotic');
      return;
    }
    for (let j = Math.max(0, A[i] - 2); j < i; j++) {
      if (A[j] > A[i]) {
        // console.log(`Bribe occured for ${A[i]} - ${A[j]}`);
        bribes++;
      }
    }
  }
  //   console.log(bribes);
  return bribes;
}

console.log(minimumBribes([2, 1, 5, 3, 4]));
