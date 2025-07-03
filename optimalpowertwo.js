function poweroptimal(n){
    if(n<1){
        return false;
    }
    return (n & (n - 1)) === 0;
}

console.log(poweroptimal(8)); // Output: true
console.log(poweroptimal(10)); // Output: false