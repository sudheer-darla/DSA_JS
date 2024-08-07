/**
 * @param {number} num
 * @return {string}
 */
const numToWord = {
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine',
  0: '',
  10: 'Ten',
  11: 'Eleven',
  12: 'Twelve',
  13: 'Thirteen',
  14: 'Fourteen',
  15: 'Fifteen',
  16: 'Sixteen',
  17: 'Seventeen',
  18: 'Eighteen',
  19: 'Nineteen',
  20: 'Twenty',
  30: 'Thirty',
  40: 'Forty',
  50: 'Fifty',
  60: 'Sixty',
  70: 'Seventy',
  80: 'Eighty',
  90: 'Ninety',
};
const numberToWords = function (num) {
  if (num === 0) {
    return 'Zero';
  }
  const result = [];
  toWords(num, result);
  return result.filter(Boolean).join(' ');
};
const toWords = function (num, result) {
  if (num < 20) {
    result.push(numToWord[num]);
    return;
  } else if (num >= 20 && num < 100) {
    result.push(numToWord[Math.floor(num / 10) * 10]);
    result.push(numToWord[num % 10]);
    return;
  } else if (num >= 100 && num < 1000) {
    result.push(toWords(Math.floor(num / 100), result));
    result.push('Hundred');
    result.push(toWords(num % 100, result));
    return;
  } else if (num >= 1000 && num < 1000 * 1000) {
    result.push(toWords(Math.floor(num / 1000), result));
    result.push('Thousand');
    result.push(toWords(num % 1000, result));
    return;
  } else if (num >= 1000 * 1000 && num < 1000 * 1000 * 1000) {
    result.push(toWords(Math.floor(num / (1000 * 1000)), result));
    result.push('Million');
    result.push(toWords(num % (1000 * 1000), result));
    return;
  } else {
    result.push(toWords(Math.floor(num / (1000 * 1000 * 1000)), result));
    result.push('Billion');
    result.push(toWords(num % (1000 * 1000 * 1000), result));
  }
};

const handleSmall = (num) => {
  return numToWord[num];
};

console.log(numberToWords(12345));