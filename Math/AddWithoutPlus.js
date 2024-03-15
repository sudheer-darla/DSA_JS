function addWithoutOperator(a, b) {
  while (b != 0) {
    let carry = a & b;
    a = a ^ b;
    b = carry << 1;
  }
  return a;
}

// Example usage:
const A = 5;
const B = 7;
console.log('Sum:', addWithoutOperator(A, B)); // Output: 12
