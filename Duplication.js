const array = [1, 2, 2, 3, 4, 2, 7]
const num = 2
let count = 0
for (let i = 0; i < array.length; i++) {
    if (num == array[i]) {
        count++
    }
}
console.log("The number " + num + " is present " + count + " times in the list");