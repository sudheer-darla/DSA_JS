function maxLevelSum(root) {
  if (!root) return -1;
  let levelQueue = [];
  levelQueue.push(root);
  let maxLevelSum = -Infinity;
  let maxLevel = 0;
  let currLevel = 1;

  while (levelQueue.length > 0) {
    const currLevelSize = levelQueue.length;
    let currLevelSum = 0;

    for (let i = 0; i < currLevelSize; i++) {
      let currNode = levelQueue.shift();
      currLevelSum += currNode.val;
      if (currNode.left) {
        levelQueue.push(currNode.left);
      }
      if (currNode.right) {
        levelQueue.push(currNode.right);
      }
    }

    if (currLevelSum > maxLevelSum) {
      console.log(currLevelSum, currLevel);
      maxLevelSum = currLevelSum;
      maxLevel = currLevel;
    }
    currLevel++;
  }

  return maxLevel;
}
