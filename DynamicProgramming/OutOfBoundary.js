/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPathsRecursive = function (m, n, maxMove, startRow, startColumn) {
  const mod = 10 ** 9 + 7;

  const checkCount = (currRow, currCol, currMoves, m, n) => {
    // Base cases
    if (currRow < 0 || currRow === m) {
      return 1;
    }

    if (currCol < 0 || currCol === n) {
      return 1;
    }

    if (currMoves >= maxMove) {
      return 0;
    }

    return (
      ((checkCount(currRow + 1, currCol, currMoves + 1, m, n) % mod) +
        (checkCount(currRow - 1, currCol, currMoves + 1, m, n) % mod) +
        (checkCount(currRow, currCol - 1, currMoves + 1, m, n) % mod) +
        (checkCount(currRow, currCol + 1, currMoves + 1, m, n) % mod)) %
      mod
    );
  };

  return checkCount(startRow, startColumn, 0, m, n);
};

/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPathsDP = function (m, n, maxMove, startRow, startColumn) {
  const mod = 10 ** 9 + 7;
  const memo = new Map();

  const checkCount = (currRow, currCol, currMoves) => {
    // Check if the result is already memoized
    const key = `${currRow}-${currCol}-${currMoves}`;
    if (memo.has(key)) {
      return memo.get(key);
    }

    // Base cases
    if (currRow < 0 || currRow === m || currCol < 0 || currCol === n) {
      return 1;
    }

    if (currMoves >= maxMove) {
      return 0;
    }

    const result =
      ((checkCount(currRow + 1, currCol, currMoves + 1) % mod) +
        (checkCount(currRow - 1, currCol, currMoves + 1) % mod) +
        (checkCount(currRow, currCol - 1, currMoves + 1) % mod) +
        (checkCount(currRow, currCol + 1, currMoves + 1) % mod)) %
      mod;

    // Memoize the result
    memo.set(key, result);    

    return result;
  };

  return checkCount(startRow, startColumn, 0);
};

console.log(findPathsDP(8, 7, 16, 1, 5));
