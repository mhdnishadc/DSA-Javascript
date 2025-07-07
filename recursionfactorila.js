function recursionFactorial(n){
    if(n==0){
        return 1;
    }
    return n = n*recursionFactorial(n-1);
}