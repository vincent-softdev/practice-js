// .flatMap() map and then flatten the array with depth 1

const array = [1, 2, [3, 4], [5, [6, 7]]];

// 
console.log(array.flatMap(x => x));