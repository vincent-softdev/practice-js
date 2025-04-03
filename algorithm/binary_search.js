// binary search
// Complexity: O(log n)
const binary_search = (array, target) => {
  let left = 0
  let right = array.length - 1
  // let middle position
  let middle = Math.floor((left + right) / 2)
  if(array[middle] === target) return middle
  while(array[middle] !== target && left <= right) {
    if(target < array[middle]) {
      // move to the left
      right = middle - 1
    } else {
      // move to the right
      left = middle + 1
    }
    // update the middle
    middle = Math.floor((left + right) / 2)
    if(array[middle] === target) return middle
  }
  return array[middle] === target ? middle : -1
}

console.log(binary_search([1, 2, 3, 4, 5], 3))