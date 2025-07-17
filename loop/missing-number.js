/*
Given an aaray nums containing n distinct numbers in the
range [0,n], return the only number in the range tht is missing from the array
*/ 
function missingNumber(num){
    for(let i = 0 ; i<=num.length;i++){
        let found = false;
        for(let j = 0;j<num.length;j++){
            if(i==num[j]){
                found = true;
                break;
            }
        }
        if(!found){
            return i;
        }
    }
}
console.log(missingNumber([0,1,2,4,5,6,7,8,9,10]))