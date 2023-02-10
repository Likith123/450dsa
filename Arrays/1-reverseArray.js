// Arrays -> 1. Reverse the array

array = [1,2,3,4,5,6];
const n = array.length;
for(let i = 0; i < n/2; i++){
    let tmp= array[i];
    array[i] = array[n-i-1];
    array[n-i-1] = tmp;
}

console.log(array);