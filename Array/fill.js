// .fill will fill the array with the item according to fill(value, from, end)

const current_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Fill 11 from position 5 to 8
const new_array = current_array.fill(11, 5, 8);

console.log(new_array);