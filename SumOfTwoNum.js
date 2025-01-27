const array = [2, 3, 5, 6, 9, 55, 8]
const num = 13
for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] == num) {
            console.log(array[i] + " + " + array[j] + " = " + num);
            break
        } else {
            console.log("Can't Find")
        }
    }
}