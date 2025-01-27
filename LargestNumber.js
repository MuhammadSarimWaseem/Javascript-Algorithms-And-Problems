const array = [1, 444, 5, 3, 9, 7, 33, 55, 23, 77]
let temp = 0
for (let i = 0; i < array.length; i++) {
    if (array[i] > temp) {
        temp = array[i]
    }
}
console.log(temp);
