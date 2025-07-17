//when we read a number from left to right and right to left it should be same
// function palindrome(num){
//     let inputNumber = num;
//     let number = 0;
//     while(num>0){
//         let reminder = num%10;
//         number = (number*10)+reminder
//         num = (num-reminder)/10
//     }
//     if(inputNumber===number){
//         return "Palindrome"
//     }
//     else{
//         return "Not a palindrome"
//     }
// }
// console.log(palindrome(123))

let palindrome = function(num){
    let inputNumber = num;
    let number = 0;
    while(num>0){
        let reminder = num%10;
        number = (number*10)+reminder
        num = (num-reminder)/10
    }
    if(inputNumber===number){
        return "Palindrome"
    }
    else{
        return "Not a palindrome"
    }
}
console.log(palindrome(121))