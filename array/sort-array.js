//How to sort an array in ascending and descending order
const x = [1,4,6,8,-9,-5];
x.sort();  //O(NlogN)
console.log(x);


x.sort((a,b)=> b-a);
console.log(x)

//How to reverse an array
x.reverse()
console.log(x);

            //or

function reverseAnArray(arr){
    for(let i=0;i<Math.floor(arr.length / 2);i++){
        let temp = arr[i];
        arr[i]=arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}

console.log(reverseAnArray([1, 4, 6, 8, -9, -5]));

