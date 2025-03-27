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

const test_data = 'MCMXCIV';
let result = 0;

for(const key in roman_symbol) {
  console.log(`${key}: ${roman_symbol[key]}`);
}