/*
You start with an initial power of power, an initial score of 0, and a bag of tokens given as an integer array tokens, where each tokens[i] donates the value of tokeni.

Your goal is to maximize the total score by strategically playing these tokens. In one move, you can play an unplayed token in one of the two ways (but not both for the same token):

Face-up: If your current power is at least tokens[i], you may play tokeni, losing tokens[i] power and gaining 1 score.
Face-down: If your current score is at least 1, you may play tokeni, gaining tokens[i] power and losing 1 score.
Return the maximum possible score you can achieve after playing any number of tokens.

https://leetcode.com/problems/bag-of-tokens/description/?envType=daily-question&envId=2024-03-04  
*/

/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function (tokens, power) {
  tokens.sort((a, b) => a - b);
  let score = 0;
  let maxScore = 0;
  let left = 0;
  let right = tokens.length - 1;

  while (left <= right) {
    if (power >= tokens[left]) {
      power -= tokens[left];
      score++;
      left++;
      maxScore = Math.max(maxScore, score);
    } else if (score > 0) {
      power += tokens[right];
      score--;
      right--;
    } else {
      break;
    }
  }

  return maxScore;
};

console.log(bagOfTokensScore([100], 50));
console.log(bagOfTokensScore([200, 100], 150));
console.log(bagOfTokensScore([100, 200, 300, 400], 200));
