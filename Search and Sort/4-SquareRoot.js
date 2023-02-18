// Search and Sort -> 4. Count Squares less than N & Square Root(floor) of N
// Link -> https://practice.geeksforgeeks.org/problems/count-squares3649/1

class Solution {
  countSquares(N) {
    // code here
    let squareCount = 0;
    for (let i = 1; i * i < N; i++) {
      squareCount++;
    }
    return squareCount;
  }

  calculateRoot(N) {
    // code here
    let i = 0,
      j = Math.floor(N / 2),
      mid = -1;
    while (i <= j) {
      mid = i + Math.floor((j - i) / 2);
      if (mid * mid == N) return mid;
      else if (mid * mid > N) j = mid - 1;
      else if (mid * mid < N) i = mid + 1;
    }
    return Math.floor(mid);
  }
}

let obj = new Solution();
console.log("Number of perfect squares less than N : " + obj.countSquares(9));
console.log("Square Root(floor) of N : " + obj.calculateRoot(9));
