var maxSum = function(nums) {
    // remove all the negative number and get unique one only
    var newNums = []
    var maxSum = 0
    nums.forEach((e) => {
        if(newNums.find((_) => _ == e) == undefined && e > 0) {
            newNums.push(e);
            maxSum += e;
        }
    })

    return maxSum;
};