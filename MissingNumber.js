const array = [1, 2, 3, 4, 6]
n = 6
let totalSum = 0
let arraySum = 0
for (let i = 0; i <= n; i++) {
    totalSum = totalSum + i
}
for (let j = 0; j < array.length; j++) {
    arraySum = arraySum + array[j]
}

const num = totalSum - arraySum
console.log(num);