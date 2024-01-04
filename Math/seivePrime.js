/**
 * Sieve of Eratosthenes algorithm to find all primes up to A.
 * @param {number} A - The upper limit to find prime numbers.
 * @returns {number[]} - An array of prime numbers.
 */
function sieveOfEratosthenes(A) {
  if (A < 2) {
    return [];
  }

  const isComposite = Array.from({ length: A + 1 }, () => 0);
  isComposite[0] = isComposite[1] = 1;
  const primes = [];

  for (let i = 2; i * i <= A; i++) {
    if (!isComposite[i]) {
      for (let j = i * i; j <= A; j += i) {
        isComposite[j] = 1;
      }
    }
  }

  for (let i = 0; i <= A; i++) {
    if (!isComposite[i]) {
      primes.push(i);
    }
  }

  return primes;
}

// Example usage:
const A = 50;
const result = sieveOfEratosthenes(A);
console.log(result);
