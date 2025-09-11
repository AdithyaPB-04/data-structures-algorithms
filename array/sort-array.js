//How to sort an array in ascending and descending order
const x = [1,4,6,8,-9,-5];
x.sort();  //O(NlogN)
console.log(x);


x.sort((a,b)=> b-a);
console.log(x)