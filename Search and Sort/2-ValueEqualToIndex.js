// Search and Sort -> 2. Value equal to index value
// Link -> https://practice.geeksforgeeks.org/problems/value-equal-to-index-value1330/1

class Solution {
  valueEqualToIndex(arr, n) {
    //code here
    let ans = [];
    for (let i = 0; i < n; i++) {
      if (arr[i] == i + 1) {
        ans.push(i + 1);
      }
    }
    return ans;
  }
}

let obj = new Solution();
let ans = obj.valueEqualToIndex([15, 2, 3, 12, 7], 5);
console.log(ans.reduce((res, num) => res + num + " ", ""));
