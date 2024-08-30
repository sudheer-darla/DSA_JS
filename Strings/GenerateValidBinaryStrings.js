// https://leetcode.com/problems/generate-binary-strings-without-adjacent-zeros/description/ 

function generateBinaryStrings(n) {
  // Initialize the result array with the first two binary strings
  let currentStrings = ['0', '1'];
  let newStrings = [];

  // Loop to generate strings of length `n`
  for (let i = 1; i < n; i++) {
    // Iterate over each existing string
    for (let binary of currentStrings) {
      // Append '1' to each binary string
      newStrings.push(binary + '1');

      // If the current string ends with '1', also append '0'
      if (binary.endsWith('1')) {
        newStrings.push(binary + '0');
      }
    }

    // Swap the new strings into current and clear the temporary array
    [currentStrings, newStrings] = [newStrings, currentStrings];
    newStrings.length = 0;
  }

  return currentStrings;
}


console.log(generateBinaryStrings(3));
console.log(generateBinaryStrings(1));