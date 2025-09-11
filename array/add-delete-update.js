//Question 3: How to delete, add and update element from specific index

let arr = [1, 2, "3", "4", "6", "7", "Hello", [1, 2, 3], 5];
arr.splice(1, 3); //1-> starting from (1-index) to 3(leading)
console.log(arr);

// to add number without leading
arr.splice(1, 0, "hi", "who");
console.log(arr);

//to update
arr.splice(1, 3, 10, 11, 12);
console.log(arr);

//splice and slice

/*slice()

    Does not modify the original array (it’s non-destructive).

    Returns a shallow copy of a portion of the array.

    let arr = [1, 2, 3, 4, 5];
    let result = arr.slice(1, 4);
    console.log(result); // [2, 3, 4]
    console.log(arr);    // [1, 2, 3, 4, 5] (unchanged)

splice()

    Modifies the original array (it’s destructive).

    Can remove, replace, or add elements.
    let arr = [1, 2, 3, 4, 5];
    let removed = arr.splice(1, 2, 10, 20);
    console.log(removed); // [2, 3] (removed elements)
    console.log(arr);     // [1, 10, 20, 4, 5] (modified)
*/

const subarr = arr.slice(1,4) //exclude 4
console.log(subarr);
console.log(arr);


/*There are two types of copy 
    Shallow copy and Deep Copy

*/

/*Shallow Copy of an Array
Here even we do changes in arrB it will reflect to arr,
because they are pointing to same memory location, same reference
*/
const arrB = arr;
arrB.splice(1,4);
console.log(arrB,arr)

/* 
Deep Copy of an Array
We can create deep copy by various methods

Spread operator
Array.from()
using concat() without giving anything in bracket

/*
Shallow Copy
A shallow copy means only the first level of the object/array is copied.
Nested objects/arrays are not duplicated – instead, their references are copied.
Changes to nested objects in the copy will also affect the original.

Deep Copy
A deep copy means the object/array and all nested objects/arrays are fully copied.
The copy is completely independent of the original.
Changes in one don’t affect the other.
*/
const  arrC = [...arr];
const arrD = Array.from(arr);
const arrE = arr.concat();
arrC.splice(1,4);
arrD.splice(1,4);
arrE.splice(1,3);
console.log(arrC, arr);
console.log(arrD,arr);
console.log(arrE,arr);

//How to add(merge or concat) two array in javascript

const newArr = [...arr,...arrE];
const newArr2 = arr.concat(arrE);

console.log(newArr);
console.log(newArr2);

//How can you check if two arrays are qual

const isArrayEqual = (arr1, arr2) =>{
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i=0;i<arr1.length;i++){
        if(arr1[i] !==arr2[i]){
            return false;
        }
    }
    return true;
}

console.log(isArrayEqual([1,2,3],[1,2]))

            //or
const isArrayEqual2 = (arr1,arr2)=>{
    return arr1.length === arr2.length && arr1.every((ele,i)=> arr1[i] === arr2[i])
}
console.log(isArrayEqual2([1,2,3],[1,2,3]))

//"every" use to check whether the condition works for all, if it is not true for a singlee element it return false
