const array1 = ['a', 'b', 'c', 'd', 'e'];

// entries will create key and value for each element in the array1
// exp: [0, 'a'], [1, 'b'], [2, 'c'], [3, 'd'], [4, 'e']
const iter = array1.entries();

iter.forEach(element => {
    console.log(element);
});
