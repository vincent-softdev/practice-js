/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
    // remove all the negative number and get unique one only
    var newNums = []
    var maxSum = 0
    if(nums.find(e => e > 0) != undefined) {
        nums.forEach((e) => {
            if(newNums.find((_) => _ == e) == undefined && e > 0) {
                newNums.push(e);
                maxSum += e;
            }
        })
        return maxSum;
    }
    else{
        var max = nums[0]
        nums.forEach((e) => {
                            if(e > max) {
                    max = e
                }
        })

        return max
    }
};