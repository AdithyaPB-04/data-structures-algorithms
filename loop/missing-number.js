/*
Given an aaray nums containing n distinct numbers in the
range [0,n], return the only number in the range tht is missing from the array
*/ 

function missingNumber1(num){
    let sumOfArray = 0;
    let sumOfRange = 0;
    for(let i = 0 ; i<num.length;i++){
        sumOfArray+=sumOfArray[i]
    }
    for(let i=0; i<num.length;i++){         // or use n*(n-1)/2 equation
        sumOfRange+=1
    }
    return sumOfRange-sumOfArray;
}
console.log(missingNumber2([0,1,2,3,5,6,7,8,9,10]))

function missingNumber2(num){
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
console.log(missingNumber2([0,1,2,4,5,6,7,8,9,10]))

function missingNumber3(num){
    return num.length*(num.length+1)/2 - num.reduce((acc,num)=> num+acc)
}
console.log(missingNumber3([0,1,2,3,5,6,7,8,9,10]))