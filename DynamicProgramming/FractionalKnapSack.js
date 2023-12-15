/*
Problem Description
Given two integer arrays A and B of size N 
each which represent values and weights associated with N items respectively.

Also given an integer C which represents knapsack capacity.

Find out the maximum total value that we can fit in the knapsack. 
If the maximum total value is ans, then return ⌊ans × 100⌋ , i.e., floor of (ans × 100).

NOTE:
You can break an item for maximizing the total value of the knapsack


Problem Constraints:
1 <= N <= 105
1 <= A[i], B[i] <= 103
1 <= C <= 103

*/

let A = [60, 100, 20];
let B = [10, 20, 30];
let C = 50;

let A1 = [10, 20, 30, 40];
let B1 = [12, 13, 15, 19];
let C1 = 10;

function fractionalKnapsack(A, B, C) {
  let fractionsArr = [];
  let profit = 0;

  for (let i = 0; i < A.length; i++) {
    fractionsArr.push({ value: A[i], weight: B[i] });
  }
  console.log(fractionsArr);

  //   Sort based on value/weight ratio (descending as we need maximum)
  fractionsArr.sort((a, b) => b.value / b.weight - a.value / a.weight);
  console.log(fractionsArr);

  for (let i = 0; i < fractionsArr.length; i++) {
    // If the given weight is already beyond capacity
    let { value, weight } = fractionsArr[i];
    if (weight > C) {
      profit += (value / weight) * C;
      //   console.log(profit);
      break;
    } else {
      profit += value;
      C -= weight;
    }
  }

  console.log(Math.floor((profit * 100).toFixed(2)));
  return Math.floor((profit * 100).toFixed(2));
}

fractionalKnapsack([3], [20], 17);
