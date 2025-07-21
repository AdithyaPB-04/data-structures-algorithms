var isPowerOfTwo = function(n) {
    if(n==1){
        return true;
    }
    if(n<=0){
        return false;
    }
    while(n>1){
        let number = n%2
        if(number==0){
            n = n/2
        }
        else{
            return false;
        }

    }
    return true;
};
console.log(isPowerOfTwo(0));

var isPowerOfTwo1 = function(n) {
    if(n<=0){
        return false;
    }
    while(n>1){
        let number = n%2
        if(number!=0){
            return false
        }
        n=n/2
    }
    return true;
};
console.log(isPowerOfTwo1(-16));