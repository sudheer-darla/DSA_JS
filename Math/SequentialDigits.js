/*
An integer has sequential digits if and only if each digit in the number is one more than the previous digit.

Return a sorted list of all the integers in the range [low, high] inclusive that have sequential digits.

Example:
Input: low = 1000, high = 13000
Output: [1234,2345,3456,4567,5678,6789,12345]

*/

var generateSequentialNumbers = function (low, high) {
  const sequentialDigits = '123456789';
  const max = sequentialDigits.length;
  const lowLength = ('' + low).length;
  const highLength = ('' + high).length;
  const ansArr = [];

  for (let len = lowLength; len <= highLength; len++) {
    for (let i = 0; i <= max - len; i++) {
      const number = +sequentialDigits.substring(i, i + len);
      if (number > high) break;
      if (number >= low && number <= high) {
        ansArr.push(number);
      }
    }
  }

  return ansArr;
};

console.log(generateSequentialNumbers(100, 30000));

/*
Time Complexity:
The time complexity is O(N), where N is the difference between the lengths of high and low.

Space Complexity:
The space complexity is O(1) as the extra space used is constant.
*/
