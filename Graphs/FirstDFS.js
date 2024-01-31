/*
Problem Description
You are given N towns (1 to N). All towns are connected via unique directed path as mentioned in the input.

Given 2 towns find whether you can reach the first town from the second without repeating any edge.

B C : query to find whether B is reachable from C.

Input contains an integer array A of size N and 2 integers B and C ( 1 <= B, C <= N ).

There exist a directed edge from A[i] to i+1 for every 1 <= i < N. Also, it's guaranteed that A[i] <= i for every 1 <= i < N.

NOTE: Array A is 0-indexed. A[0] = 1 which you can ignore as it doesn't represent any edge.



Problem Constraints
1 <= N <= 100000



Input Format
First argument is vector A

Second argument is integer B

Third argument is integer C



Output Format
Return 1 if reachable, 0 otherwise.
*/

function solve(A, B, C) {
  let graph = new Map();

  for (let i = 1; i < A.length; ++i) {
    const val = A[i];
    let edges = graph.get(val);
    if (edges) {
      graph.set(val, [...edges, i + 1]);
    } else {
      graph.set(val, [i + 1]);
    }
  }  

  const dfs = (src, dest) => {
    // Base cases
    if (src === dest) return true;
    if (!graph.get(src)) return false;

    const neighbors = graph.get(src);
    for (let neighbor of neighbors) {
      if (dfs(neighbor, dest)) return true;
    }

    return false;
  };

  return +dfs(C, B);
}

A = [1, 1, 2];
B = 1;
C = 2;


console.log(solve([1,1,2], 2, 1));