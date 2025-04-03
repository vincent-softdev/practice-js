// Recursive binary search
// Complexity: O(log n)
const binary_search = (array, target) => {
  let left = 0
  let right = array.length - 1

  // calculate again the middle
  let middle = (left + right) / 2
  // check middle
  if(array[middle] === target) return middle

  // now, we check smaller and larger
  if(array[middle] < target) {
    // cut from middle to right
    return binary_search(array.slice(middle + 1), target)
  }
  else {
    // cut from middle to left
    return binary_search(array.slice(0, middle), target)
  }
}

console.log(binary_search([1, 2, 3, 4, 5], 3))