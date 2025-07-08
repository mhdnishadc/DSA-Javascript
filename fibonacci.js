function fibonacci(n){
    const fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

// Measure execution time
console.time("fibonacci");
console.log(fibonacci(1000)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
console.timeEnd("fibonacci"); // Prints the time taken to execute fibonacci(10)

// time