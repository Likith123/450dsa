// Arrays -> 1. First and last occurrences of x
// Link -> https://practice.geeksforgeeks.org/problems/first-and-last-occurrences-of-x3116/1

class Solution {
  find(arr, n, x) {
    //code here
    let ans = [];
    ans.push(this.firstOccurance(arr, n, x));
    ans.push(this.lastOccurance(arr, n, x));
    return ans;
  }

  firstOccurance(arr, n, x) {
    let i = 0,
      j = n - 1;
    let ans = -1;
    while (i <= j) {
      let mid = i + Math.floor((j - i) / 2);
      if (arr[mid] < x) {
        i = mid + 1;
      } else if (arr[mid] > x) {
        j = mid - 1;
      } else {
        ans = mid;
        j = mid - 1;
      }
    }
    return ans;
  }

  lastOccurance(arr, n, x) {
    let i = 0,
      j = n - 1;
    let ans = -1;
    while (i <= j) {
      let mid = i + Math.floor((j - i) / 2);
      if (arr[mid] < x) {
        i = mid + 1;
      } else if (arr[mid] > x) {
        j = mid - 1;
      } else {
        ans = mid;
        i = mid + 1;
      }
    }
    return ans;
  }
}

let obj = new Solution();
let arr = [1, 3, 5, 5, 5, 5, 67, 123, 125];
let n = arr.length, x = 5;
console.log('First Occurance : ' + obj.find(arr,n,x)[0] + '\nLast Occurance : '+ obj.find(arr,n,x)[1]);