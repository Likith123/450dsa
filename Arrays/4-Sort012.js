// Arrays -> 4. Sort an array of 0s, 1s and 2s
// Links -> https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1 &&
//         https://leetcode.com/problems/sort-colors/

// This is also known as Dutch Flag problem

function swap(i, j, arr) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
function dutchFlag() {
  let arr = [1,2,0,1,2,1,0];
  let N = arr.length;
  let start = 0,
    end = N - 1;
  for (let i = 0; i <= end; ) {
    if (arr[i] == 0) {
      swap(start, i, arr);
      start++;
      i++;
    } else if (arr[i] == 2) {
      swap(end, i, arr);
      end--;
    } else {
      i++;
    }
  }
  console.log(arr);
}

dutchFlag();

