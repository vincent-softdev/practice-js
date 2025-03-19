var firstArray = [10, 20, 30, 40, 50];
// copyWithin() modifies firstArray directly
firstArray.copyWithin(0, 2, 4);
console.log(firstArray); // [30, 40, 30, 40, 50]
