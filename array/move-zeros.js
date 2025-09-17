// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

var moveZeroes = function(nums) {
    let insertPosition = 0;
    for(let i of nums){
        if(i!==0){
            nums[insertPosition++] = i
        }
    }
    while(insertPosition < nums.length){
        nums[insertPosition++] = 0
    }
/*
                or

let insertPos = 0;
    for(let i = 0 ;i < nums.length;i++){
        if(nums[i]!==0){
            nums[insertPos] = nums[i]
            insertPos++;
        }
    }
    console.log(nums)
    console.log(insertPos,nums.length)
    while(insertPos<nums.length){
        nums[insertPos] = 0;
        insertPos++
    }
*/
};

