const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, -4]
const array2 = [2, 4, 6, 8, -4, 10]
let commonArray = []
for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
        if (array1[i] === array2[j]) {
            commonArray.push(array1[i])
        }
    }
}

console.log(commonArray);