//Map, filter and reduce
let x = [6,4,1,0,-5,-9];
const newMapArr = x.map((ele,i)=>ele*ele);
console.log(newMapArr);

const positiveNumbers = x.filter((ele,i)=>ele>0);
console.log(positiveNumbers);

//map and filter return a simple array but reduce return a number

const sumOfArray = positiveNumbers.reduce((acc,element)=>acc+element,0);
console.log(sumOfArray)

//in the reduce acc = > for accumulater and we set value as 0 and element in the initial value from array
//if we didn't give acc it automatically set the first element in array as acc


//flat
const y = [1,2,[4,5,[6,7]],8,9];
let flattedArray = y.flat(4);
console.log(flattedArray);

//filter vs find
/*
filter()
Returns: A new array containing all elements that satisfy the condition.
If no elements match: Returns an empty array [].
Always returns an array.

find()
Returns: The first element that satisfies the condition.
If no element matches: Returns undefined.
Always returns a single value (not an array).
*/

const positiveNumbers1 = x.find((ele,i)=>ele>0);
console.log(positiveNumbers1);