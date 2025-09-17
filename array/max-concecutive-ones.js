// Input: nums = [1,1,0,1,1,1]
// Output: 3

var findMaxConsecutiveOnes = function (nums) {
    let maxConcecutive = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {

        if (nums[i] == 1) {
            maxConcecutive++
        }
        else {
            if (maxConcecutive > count) {
                count = maxConcecutive
            }
            maxConcecutive = 0;
        }
    }
    if (maxConcecutive > count) {
        count = maxConcecutive
    }
    return count
};