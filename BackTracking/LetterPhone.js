/*
Problem Description
Given a digit string A, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below.



The digit 0 maps to 0 itself. The digit 1 maps to 1 itself.

NOTE: Make sure the returned strings are lexicographically sorted.
*/

const letterCombinations = (A) => {
  const digitMap = {
    0: '0',
    1: '1',
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  let combinationsArr = [];
  let currentCombination = '';

  const backTrackHelper = (num, currentCombination, index) => {
    // Base case
    if (index === num.length) {
      combinationsArr.push(currentCombination);
      return;
    }

    let currentDigit = num[index];
    for (let i = 0; i < digitMap[currentDigit].length; i++) {
      currentCombination += digitMap[currentDigit][i];
      // Move to next possible combination
      backTrackHelper(num, currentCombination, index + 1);
      currentCombination = currentCombination.slice(0, -1); // Remove the last character
    }
  };

  backTrackHelper(A, currentCombination, 0, digitMap);
  console.log(combinationsArr);
  return combinationsArr;
};

letterCombinations('012');
letterCombinations('01');
letterCombinations('52');
