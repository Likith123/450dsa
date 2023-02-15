// Arrays -> 7. Cyclically rotate an array by one
// Link -> https://practice.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2614/1


class Solution {
  rotate(arr, n) {
    //code here
    let finEl = arr[n - 1];
    for (let i = n - 1; i > 0; i--) arr[i] = arr[i - 1];
    arr[0] = finEl;
    return arr;
  }
}

let obj = new Solution();
console.log(obj.rotate([1,2,3,4,5],5));

