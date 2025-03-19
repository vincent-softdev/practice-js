// .every will tests whether all elements in the array pass the test implemented by the provided function
// remember, each value in the array will be passed to the callback function

// Implement the function
const isEven = (element) => element % 2 === 0;

const testing_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even_testing_array = [2, 4, 6, 8, 10];

// should be false
console.log(testing_array.every(isEven));
// should be true
console.log(even_testing_array.every(isEven));