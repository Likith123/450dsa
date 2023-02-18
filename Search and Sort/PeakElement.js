// Search and Sort -> Problem 162. Find Peak Element(Not in 450dsa)
// Link -> https://leetcode.com/problems/find-peak-element/

function peakElement(nums) {
    let n = nums.length;
    if(n == 1) return 0;
    let i = 0, j = n - 1, mid = -1;
    while(i<j){
        mid = i + Math.floor((j - i) / 2);
        if(nums[mid] < nums[mid + 1]){
            i = mid + 1;
        } else {
            j = mid;
        }
    }
    return j;
}

let ans = peakElement([0,1,2,1]);
console.log(`Peak Element in this array is at Index : ${ans}`);