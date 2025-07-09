function linearSearch(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            return i;
        }
    }
    return -1;
}

// Input array and target
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const target = 12;

console.time("linearSearch");
console.log(linearSearch(inputArray, target));  
console.timeEnd("linearSearch");                
