function subArrays(A, count) {
  let ansArr = [];

  const subArrayHelper = (A, idx, currSubArr) => {
    // Base case
    if (idx === A.length) {
      return;
    }

    // Possibilities
    currSubArr.push(A[idx]);
    ansArr.push([...currSubArr]);
    subArrayHelper(A, idx + 1, currSubArr);
  };

  subArrayHelper(A, 0, []);

  console.log(ansArr);
}

subArrays([6, 5, 4, 3, 2, 1], 2);
