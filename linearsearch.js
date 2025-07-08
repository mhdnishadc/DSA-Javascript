function linearSearch(n){
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            return i; 
        }
    }
    return -1; 

}

console.time("linearSearch");
console.log(linearSearch(10));  
console.timeEnd("linearSearch"); // Prints the time taken to execute linearSearch(5)