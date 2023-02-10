// Arrays - > 2. Find minimum and maximum element in an array
// Link -> https://practice.geeksforgeeks.org/problems/find-minimum-and-maximum-element-in-an-array4428/1

class Solution {
  getMinMax(arr, n) {
    //code here
    let min = Math.pow(10, 12), max = 1;
    for (let i = 0; i < n; i++) {
      min = arr[i] < min ? arr[i] : min;
      max = arr[i] > max ? arr[i] : max;
    }
    return [min, max];
  }
}