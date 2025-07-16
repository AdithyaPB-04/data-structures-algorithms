/*
Question 3: count the number of digits of a number
*/
//it is used because (run atleast once)
function sumOfDigitsOfaNumber(num) {
    let count = 0;
    do {
        let reminder = num % 10;
        count = count + 1 //count+=1
        num = Math.floor((num - reminder) / 10)
    }
    while (num > 0)
    return count
}
console.log(sumOfDigitsOfaNumber(128))