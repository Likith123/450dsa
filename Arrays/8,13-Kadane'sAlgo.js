// Arrays -> 8. & 13. Kadane's Algorithm 
// Links -> https://leetcode.com/problems/maximum-subarray/submissions/898529814/ &
//          https://practice.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1

class Solution {
  //Function to find the sum of contiguous subarray with maximum sum.
  maxSubarraySum(arr, N) {
    // code here
    let ans = Math.pow(-10, 7),
      sum = 0;
    for (let i = 0; i < N; i++) {
      sum += arr[i];
      ans = Math.max(ans, sum);
      sum = Math.max(0, sum);
    }
    return ans;
  }
}

let maxSum = new Solution();
console.log(maxSum.maxSubarraySum([-1, 2, 3, -5, 2], 5));

