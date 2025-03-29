/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  // complex is O(log x)
  // we can create a searching loop which b*b == x
  if(x < 2) return x;

  // split the array to 2 
  let start = 1, end = x, ans = 0;
  while(start <= end){
      // middle point here, we have to change middle a lot so we implement it here
      let mid = Math.floor((start + end)/2);
      if(mid * mid == x) {
          return mid;
      }
      // with this, we do know that ans will be current mid, and then 
      else if (mid * mid < x) {
          // move ans to mid -> now we have new array to search. Which start from mid
          ans = mid;
          // move to start point, end point still the last value
          start = mid + 1;
      } else {
          // if mid*mid > x means that we have mid is too big
          // Now, we will search end in mid - 1, start still be 0
          end = mid - 1;
      }

  }
  return ans
};