var pivotIndex = function(nums) {
    let totalSum = nums.reduce((a, b) => a + b, 0);
    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        let rightSum = totalSum - leftSum - nums[i];
        if (leftSum === rightSum) {
            return i;
        }
        leftSum += nums[i];
    }

    return -1;
};



/*
var pivotIndex = function(nums) {
    let leftSum = 0;
    let rightSum = 0;
    for(let i=0;i<nums.length;i++){   //i=0
        if(i==0 && i==nums.length-1){
            leftSum+=0;
            rightSum+=0;
            return 0
        }
        else if(i==0){
            leftSum+=0
            for(let j=i+1;j<nums.length;j++){
                rightSum+=nums[j]
            }
        }
        else if(i==nums.length-1){
            rightSum+=0
            for(let j=nums.length-2;j>=0;j--){
                leftSum+=nums[j]
            }
        }
        else {
            for(let j=i+1;j<nums.length;j++){
                rightSum+=nums[j]
            }
            for(let j=i-1;j>=0;j--){
                leftSum+=nums[j]
            }
        }
        if(leftSum == rightSum){
            return i
        }
        else{
            leftSum = 0;
            rightSum = 0;
        }
    }
    return -1;
};
*/