//Question 2: Check if an element exists in an array if yes give it's index
let arr = [43,54,60]
function elementExists(arr,target){
    for(let i=0;i<arr.length;i++){
        if(target==arr[i]){
            return i;
        }
    }
    return -1
}
console.log(elementExists(arr,60))
console.log(arr.indexOf(54))
console.log(arr.indexOf(53))