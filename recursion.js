function fibonnacci (n){
     if(n<2){
            return n;   
     }
        return fibonnacci(n-1) + fibonnacci(n-2);
}

console.log(fibonnacci(60)); // Output: 55
