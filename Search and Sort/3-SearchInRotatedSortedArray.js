// Search and Sort -> 3. Search in Rotated Sorted Array
// Link -> https://leetcode.com/problems/search-in-rotated-sorted-array/

var search = function (nums, target) {
  let n = nums.length;
  let i = 0,
    j = n - 1;
  while (i <= j) {
    let mid = i + Math.floor((j - i) / 2);
    if (nums[mid] == target) return mid;
    if (nums[i] <= nums[mid]) {
      if (nums[i] <= target && target <= nums[mid]) {
        // if target lies in btw i & mid
        j = mid - 1;
      } else {
        i = mid + 1;
      }
    } else {
      if (nums[mid] <= target && target <= nums[j]) {
        // if target lies in btw mid & j
        i = mid + 1;
      } else {
        j = mid - 1;
      }
    }
  }
  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
