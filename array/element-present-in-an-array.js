/* 
Question 1 Check if an element exists in an array
*/
let arr = [43,54,60]
function elementExists(arr,target){
    let found = false;
    for(let i=0;i<arr.length;i++){
        if(target==arr[i]){
            found = true
            break;
        }
    }
    return found
}
console.log(elementExists(arr,34))

console.log(arr.includes(54))

