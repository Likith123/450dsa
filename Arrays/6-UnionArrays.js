// Arrays - 6. Union of two arrays
// Link - https://practice.geeksforgeeks.org/problems/union-of-two-arrays3538/1

class Solution {
  //Function to return the count of number of elements in union of two arrays.
  doUnion(a, n, b, m) {
    // code here
    let ans = new Set();
    a.forEach((i) => ans.add(i));
    b.forEach((i) => ans.add(i));
    return ans.size;
  }
}

let res = new Solution();
console.log(res.doUnion([1, 2, 3, 4, 5], 5, [1, 2, 3], 3));