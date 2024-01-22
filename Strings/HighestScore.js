function highestScore(A) {
  let studentMap = {};
  let maxAvg = 0;
  for (let i = 0; i < A.length; i++) {
    const [name, marks] = A[i];
    if (studentMap[name]) {
      const { total, count } = studentMap[name];
      studentMap[name] = {
        total: total + +marks,
        count: count + 1,
        average: Math.floor((total + +marks) / (count + 1)),
      };
    } else {
      studentMap[name] = { total: +marks, count: 1, average: +marks };
    }
  }  

  for (let student in studentMap) {
    maxAvg = Math.max(studentMap[student].average, maxAvg);
  }
  return maxAvg;
}

const dataArray = [
  ['nfa', '97'],
  ['nfa', '97'],
  ['nfa', '32'],
  ['nfa', '67'],
  ['nfa', '80'],
  ['nfa', '20'],
  ['nfa', '43'],
  ['nfb', '54'],
  ['nfb', '90'],
  ['nfb', '90'],
];
console.log(highestScore(dataArray));
