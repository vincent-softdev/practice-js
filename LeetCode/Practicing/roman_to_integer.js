const roman_symbol = {
  'IV': 4,
  'IX': 9,
  'I': 1,
  'V': 5,
  'XL': 40,
  'XC': 90,
  'X': 10,
  'L': 50,
  'CD': 400,
  'CM': 900,
  'C': 100,
  'D': 500,
  'M': 1000
}

let test_data = 'DCXXI';
let result = 0;

for(const key in roman_symbol) {
  if(test_data == '') break;
  const temp_test_data = test_data;

  while(test_data.indexOf(key) !== -1) {
    test_data = test_data.replace(key, '');

    if(test_data !== temp_test_data) {
      result += roman_symbol[key];
    }
  }
}

console.log(result);