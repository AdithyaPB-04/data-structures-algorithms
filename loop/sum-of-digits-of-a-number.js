/*
Question 2: sum of digits of a number
*/

function sumOfDigitsOfaNumber(num) {
    let sum = 0;
    while (num > 0) {
        let reminder = num % 10;
        sum = sum + reminder //sum+=reminder
        num = Math.floor((num - reminder) / 10)
    }
    return sum
}
console.log(sumOfDigitsOfaNumber(1287))

/*
Math.floor()
Math.floor(4.9)    // 4
Math.floor(-4.9)   // -5

Math.ceil()
Math.ceil(4.1)     // 5
Math.ceil(-4.1)    // -4

Math.round()
Math.round(4.5)    // 5
Math.round(4.4)    // 4
Math.round(-4.5)   // -4 (in JS, ties go away from 0)
*/