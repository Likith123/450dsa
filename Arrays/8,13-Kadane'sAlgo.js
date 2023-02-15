// Arrays -> 8. & 13. Kadane's Algorithm 
// Links -> https://leetcode.com/problems/maximum-subarray/submissions/898529814/ &
//          https://practice.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1

class Solution {
  //Function to find the sum of contiguous subarray with maximum sum.
  maxSubarraySum(arr, N) {
    // code here
    let maxSum = arr[0],
      sum = arr[0];
    for (let i = 1; i < N; i++) {
      sum = Math.max(sum + arr[i], arr[i]);
      maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
  }
}

let maxSum = new Solution();
console.log(maxSum.maxSubarraySum([-1, 2, 3, -5, 2], 5));

