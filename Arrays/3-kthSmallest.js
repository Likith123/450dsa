// Arrays -> 3. Find the "Kth" max and min element of an array
/* Links -> https://practice.geeksforgeeks.org/problems/kth-smallest-element5635/1 && 
            https://leetcode.com/problems/kth-largest-element-in-an-array/   */

const arr = [7, 10, 4, 3, 20, 15]; // 7,10,4,3,15,20
const n = arr.length;
let k = 3;

// Solution:

// 1. O(nlogn) Normal Sort function
// arr.sort((a,b)=> a-b)
// console.log(arr[k-1])

// 2. QuickSelect Algorithm

function swap(a,b){
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
}

function quickSelect(l, r) {
  let pivot = arr[r];
  let ptr = l; // Selecting right most element as pivot and ptr from staring element
  for (let i = l; i < r; i++) {
    if (arr[i] <= pivot) {
      swap(ptr, i);
      ptr++;
    }
  }
  swap(ptr, r);

  // for kth smallest
  if (ptr == k - 1) {
    return arr[ptr];
  } else if (ptr > k - 1) { //if ptr > k-1, then we will check in left of ptr
    return quickSelect(l, ptr - 1);
  } else if (ptr < k - 1) { //if ptr < k-1, then we will check in right of ptr
    return quickSelect(ptr + 1, r);
  }

// for kth largest
//   if (ptr == n - k) {
//     return arr[ptr];
//   } else if (ptr > n - k) {
//     return quickSelect(l, ptr - 1);
//   } else if (ptr < n - k) {
//     return quickSelect(ptr + 1, r);
//   }
}

let ans = quickSelect(0, n - 1);
console.log(ans);
