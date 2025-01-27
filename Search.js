const array = [1, 2, 3, 4, 5, 8, 7]
const num = 8
for (let i = 0; i < array.length; i++) {
    if (num == array[i]) {
        console.log("True", i);
        break
    } else {
        console.log("False");
    }
}