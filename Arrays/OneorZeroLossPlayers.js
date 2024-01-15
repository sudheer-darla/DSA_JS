/*
You are given an integer array matches where matches[i] = [winneri, loseri] 
indicates that the player winneri defeated player loseri in a match.

Return a list answer of size 2 where:

answer[0] is a list of all players that have not lost any matches.
answer[1] is a list of all players that have lost exactly one match.
The values in the two lists should be returned in increasing order.

Note:
You should only consider the players that have played at least one match.
*/

var findWinners = function (matches) {
  const n = matches.length;
  let winnersSet = new Set();
  let losersSet = new Set();
  let singleLossSet = new Set();

  let zeroLossArr = [];

  for (let i = 0; i < n; i++) {
    winnersSet.add(matches[i][0]);
    if (losersSet.has(matches[i][1])) {
      singleLossSet.delete(matches[i][1]);
    } else {
      singleLossSet.add(matches[i][1]);
      losersSet.add(matches[i][1]);
    }
  }

  let singleLossArray = [...singleLossSet].sort((u1, u2) => u1 - u2);
  for (let user of [...winnersSet]) {
    if (!losersSet.has(user)) {
      zeroLossArr.push(user);
    }
  }

  zeroLossArr.sort((u1, u2) => u1 - u2);

  return [zeroLossArr, singleLossArray];
};

console.log(
  findWinners([
    [2, 3],
    [1, 3],
    [5, 4],
    [6, 4],
  ])
);
