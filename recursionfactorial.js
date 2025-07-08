function recursionFactorial(n){
    if(n===0){
        return 1;
    }
    return n * recursionFactorial(n-1);
}
console.time("recursionFactorial");
console.log(recursionFactorial(50)); // Output: 120
console.timeEnd("recursionFactorial"); // Prints the time taken to execute recursionFactorial(5)