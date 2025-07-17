//Fibanocci numbers,commonly denoted F(n) from a sequence, is called Fibonacci sequence,such that each number is the sum of the two preceding ones, starting from 0 and 1.
// if n=5
// 0 1 1 2 3 5 8
function fibonacciNumbers(num){
    let firstNumber = 0;
    let secondNumber = 1;
    let fibonacciSum = 0;
    if(num<2){
        return num;
    }
    for(let i = 2; i<=num;i++){
        fibonacciSum = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = fibonacciSum;
    }
    return fibonacciSum;
}
console.log(fibonacciNumbers(6))