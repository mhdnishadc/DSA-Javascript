function recursionFactorial(n){
    if(n===0){
        return 1;
    }
    return n * recursionFactorial(n-1);
}

console.log(recursionFactorial(5)); // Output: 120
console.log(recursionFactorial(10)); // Output: 3628800