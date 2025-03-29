let digits = [1, 2, 9]

let over = 0
let result = []

for(let i = digits.length - 1; i >= 0; i--) {
    if(digits[i] === 9) {
        digits[i] = 0
        over = 1;
    } else {
        digits[i] += 1
        over = 0;
        break
    }
}

if(over === 1) {
    console.log('this')
    result.push(1)
}

for(let i = 0; i < digits.length; i++) {
    result.push(digits[i])
}

console.log(result)