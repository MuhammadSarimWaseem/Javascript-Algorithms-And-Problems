let array = []
const num = 50
for (let i = 2; i <= num; i++) {
    let isPrime = true
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false
            break//prime numbers
        }
    } if (isPrime) {
        array.push(i)
    }
}

console.log(array);
