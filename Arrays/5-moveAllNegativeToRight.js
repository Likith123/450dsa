// Arrays -> 5. Move all negative elements to end
// Link -> https://practice.geeksforgeeks.org/problems/move-all-negative-elements-to-end1813/1

class Solution {
  segregateElements(arr, n) {
    //code here
    let ans = [];
    arr.forEach((i) => {
      if (i >= 0) ans.push(i);
    });
    arr.forEach((i) => {
      if (i < 0) ans.push(i);
    });
    for (let i = 0; i < n; i++) {
      arr[i] = ans[i];
    }
  }
}
