// create a list of string from the array
const new_array = ['a', 'b', 'c', 'd', 'e'];

// extract the keys out of the array to another array
const iter = new_array.keys();

// print the keys
iter.forEach((element) => {
    console.log(element);
});
