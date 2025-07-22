/*
If x is 0 or 1, then return x,
*/

function squareRoot(num){
    let number;
    if(num<=1){
        return num;
    }
    for(let i = 2;i<=num;i++){
        if(i*i == num){
            return i;
        }
        if (i*i>num){
            return i-1;
        }
    }
    return number;
}
console.log(squareRoot(-64));