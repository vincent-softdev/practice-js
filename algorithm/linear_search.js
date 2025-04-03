const linear_search = (array, target) => {
  for (let i =0; i< array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
}

console.log(linear_search([1, 2, 3, 4, 5], 5))
