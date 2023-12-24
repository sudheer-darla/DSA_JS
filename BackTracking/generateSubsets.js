function generateSubsets(arr) {
  let subsets = [];
  let ans = [];
  const backTrackSubSets = (arr, idx, ans) => {
    // Base case
    if (idx === arr.length) {
      subsets.push([...ans]);
      return;
    }

    // Take element at idx
    ans.push(arr[idx]);
    backTrackSubSets(arr, idx + 1, ans);
    ans.pop();

    // Don't take eloement at idx
    backTrackSubSets(arr, idx + 1, ans);
  };

  backTrackSubSets(arr, 0, ans);

  subsets.sort();
  console.log(subsets);
  return subsets;
}

let A = [1, 2];

// generateSubsets(A);

const generateSubsets2 = (arr) => {
  let subsets = [];
  let currentSubSet = [];

  const backTrackSubSets = (currentSubSet, idx) => {
    subsets.push([...currentSubSet]);
    for (let i = idx; i < arr.length; i++) {
      currentSubSet.push(arr[i]);
      backTrackSubSets(currentSubSet, i + 1);
      currentSubSet.pop();
    }
  };

  backTrackSubSets(currentSubSet, 0);

  console.log(subsets);
};

generateSubsets2([1, 2, 3]);
