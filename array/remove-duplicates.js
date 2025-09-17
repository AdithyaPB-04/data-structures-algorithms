var removeDuplicates = function(nums) {
    let insert = 0;
    let newArray = []
    for(let i of nums){
        if(!newArray.includes(i)){
            nums[insert++] = i
            newArray.push(i)
        }
    }
    nums.splice(insert,nums.length)
    return nums.length
};