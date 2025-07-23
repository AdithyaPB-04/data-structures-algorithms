//how to create an empty array in js

//Array is a collection of items which can be of different data types

const arr = [];
const arr2 = new Array();
console.log(arr,arr2)

const arr3 = [1,2,3,4, "Hello",{name: "Adi"},[1,2,3,4]]
console.log(arr3);

//How to find first and last element of an array
console.log("first",arr3[0],"last",arr3[arr3.length-1])

//To remove last element from an array
const popLast = arr3.pop();  //->O(1)
console.log(popLast);
console.log(arr3);

//To add an element at the end of an array
arr3.push("Sree");          //->O(1)
console.log(arr3);

//To add an element in the first of an array
arr3.unshift(5);
console.log(arr3);          //->O(N)

//To remove first element
arr3.shift();               //->O(N)
console.log(arr3);

//how to loop through an array in javascript
for(let i = 0;i<arr3.length;i++){
    console.log(arr3[i])
}

arr3.forEach((x,i)=>console.log(x,arr3[i])) //x is the first element and i is the index

arr3.forEach((a)=>console.log(a))

for(let x of arr3){
    console.log(x)
}