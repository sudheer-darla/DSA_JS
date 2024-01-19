function deserialize(A) {
  A = A.toLowerCase();
  let words = A.split('~');

  const isNotAlphabet = (ch) => {
    return !'abcedefghijklmnopqrstuvwxyz'.includes(ch);
  };

  const decodeWord = (word) => {
    let end = word.length - 1;
    while (isNotAlphabet(word[end])) end--;
    return word.substring(0, end+1);
  };

  let ans = words.filter((W) => W.length > 0).map((word) => decodeWord(word));

  return ans;
}


const testCases = [
  { input: 'abc3~xyz3~', output: ['abc', 'xyz'] },
  { input: '', output: [] },
  { input: 'hello5~', output: ['hello'] },
  { input: 'apple5~orange6~banana6~', output: ['apple', 'orange', 'banana'] },
  { input: 'banana6~apple5~orange6~', output: ['banana', 'apple', 'orange'] },
  { input: 'abc33~xyz37~', output: ['abc33', 'xyz37'] },
  { input: 'abc$%^&*12~xyz#@!14~', output: ['abc$%^&*12', 'xyz#@!14'] },
  {
    input: 'abcdefghijklmnopqrstuvwxyz26~',
    output: ['abcdefghijklmnopqrstuvwxyz'],
  },
  { input: 'a0~b0~c0~', output: ['a', 'b', 'c'] },
  { input: 'AbC3~dEf4~', output: ['AbC', 'dEf'] },
  { input: 'hello~world5~', output: ['hello~world'] },
  { input: 'abc005~xyz012~', output: ['abc005', 'xyz012'] },
];

// Testing loop
for (const testCase of testCases) {
  const result = deserialize(testCase.input);
  console.log(
    `Input: "${testCase.input}" | Expected Output: [${testCase.output
      .map((s) => `"${s}"`)
      .join(', ')}] | Actual Output: [${result
      .map((s) => `"${s}"`)
      .join(', ')}] | ${(result, testCase.output) }`
  );
}