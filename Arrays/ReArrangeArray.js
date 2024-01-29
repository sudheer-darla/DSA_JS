/*
Given an array A of size N. Rearrange the given array so that A[i] becomes A[A[i]] with O(1) extra space.
Lets say N = size of the array. Then, following holds true :

All elements in the array are in the range [0, N-1]
N * N does not overflow for a signed integer

Constraints:

1 <= N <= 5×104

0 <= A[i] <= N - 1

The elements of A are distinct 

*/

function rearrange(A){

    const N = A.length;

    for(let i = 0; i < A.length; i++){
        A[i] += (A[A[i]] % N) * N;
    }

    console.log(A)

    for(let i = 0; i < N; i++){
        A[i] = Math.floor(A[i]/N);
    }

    return A;
}

console.log(rearrange([4,0,2,1,3]));