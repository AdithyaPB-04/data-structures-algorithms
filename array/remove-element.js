// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]

var removeElement = function(nums, val) {
    let insertPosition = 0;
    for(let num of nums){
        if(num!==val){
            nums[insertPosition] = num
            insertPosition++;
        }
    }
    console.log(nums)
    nums.splice(insertPosition,nums.length);
    return nums.length;
};