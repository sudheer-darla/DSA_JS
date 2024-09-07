function findAthBinaryPalindrome(A) {
  // Function to generate binary palindromes of a given length
  function generateBinaryPalindromes(length) {
    const palindromes = [];
    const halfLength = Math.ceil(length / 2);

    // Generate all numbers with halfLength in binary and mirror them
    const start = 1 << (halfLength - 1); // smallest number with halfLength bits
    for (let i = start; i < 1 << halfLength; i++) {
      let binary = i.toString(2); // Convert to binary string
      let palindrome;

      if (length % 2 === 0) {
        // Even length: mirror the entire binary
        palindrome = binary + binary.split('').reverse().join('');
      } else {
        // Odd length: mirror excluding the middle bit
        palindrome = binary + binary.split('').reverse().slice(1).join('');
      }

      palindromes.push(parseInt(palindrome, 2)); // Convert back to integer
    }

    return palindromes;
  }

  let length = 1; // Start with length 1 binary palindromes
  const result = [];

  // Keep generating palindromic binaries until we reach A count
  while (result.length < A) {
    const palindromesOfLength = generateBinaryPalindromes(length);
    result.push(...palindromesOfLength);
    length++;
  }

  // Return the A-th binary palindrome
  return result[A - 1];
}

// Example usage
const A = 14; // Find the 5th binary palindrome
const result = findAthBinaryPalindrome(A);
console.log(result); // Output should be 9 (1001 in binary)
