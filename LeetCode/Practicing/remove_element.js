var removeElement = function(nums, val) {
  let count = 0
  let emptyCount = 0
  let newNums = []

  for(const i in nums){
    if(nums[i] == val) {
        emptyCount += 1
        continue;
    }
    count += 1
    newNums.push(nums[i])
  }
  return newNums
};

console.log(removeElement([3,2,2,3], 3))