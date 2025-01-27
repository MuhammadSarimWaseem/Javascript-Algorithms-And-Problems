let array = [4, -2, -4, 5, 6, 8, 1, 2, 99, 34, -67, 2, 1, 0, -4, 2, 4, 66, 7, 8, 89, 9, 9, -6, -4]
let swap;
for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] > array[j]) {
            swap = array[j]
            array[j] = array[i]
            array[i] = swap
        }
    }
}

console.log(array);