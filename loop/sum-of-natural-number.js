/*
Question1: sum of all natural numbers from 1 to n
*/

function sumOfNaturalNumber(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum = sum + i
    }
    return sum
}

let sum = sumOfNaturalNumber(10)
console.log(sum)



//using formula


// function sumOfNaturalNumber(num){
//     let sum = 0;
//     return num*(num+1)/2
// }


//without assigning to a variable


// let sum = sumOfNaturalNumber(10)
// console.log(sum)

// function sumOfNaturalNumber(num){
//     let sum = 0;
//     for(let i=1;i<=num;i++){
//         sum = sum+i
//     }
//     return sum
// }

// console.log(sumOfNaturalNumber(10));