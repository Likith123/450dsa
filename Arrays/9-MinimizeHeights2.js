// Arrays -> 9. Minimize the Heights II
// Links -> https://practice.geeksforgeeks.org/problems/minimize-the-heights3351/1

class MinimizeHeights{
    minimize(arr,k){
        let n = arr.length;
        arr.sort((a,b) => a-b); // Sort the array in asc order
        let result = arr[n-1] - arr[0]; 
        for(let i = 1; i < n; i++){ // Check for every element in following procedure
            if(arr[i] >=k){
              // So that arr[i] - k can't be -ve
              let minHeight = Math.min(arr[0] + k, arr[i] - k); // min of lowest num + k && remaining nums(each)-k
              let maxHeight = Math.max(arr[i - 1] + k, arr[n - 1] - k); // max of highest num +- k && remaining nums(each)+k
              result = Math.min(result, maxHeight - minHeight);
            }
        }
        return result;
    }
}

let obj = new MinimizeHeights();
console.log(obj.minimize([1,5,8,10],2));