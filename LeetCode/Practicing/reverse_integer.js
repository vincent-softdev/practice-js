var reverse = function(x) {
  let temp = Math.abs(x);
  let result = 0;
  while(temp > 0) {
    // Increase result by one 0, then add the last digit
    result = result * 10 + temp % 10;
    // reduce the temp by 1 digit
    temp = Math.floor(temp / 10);
  }
  // condition check for overflow
  if(result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31)) return 0;
  return x < 0 ? -result : result;
};

console.log(reverse(-123));