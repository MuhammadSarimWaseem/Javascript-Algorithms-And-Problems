const array = [2, 5, 3, 1, 9, 53, 0, 82, 9, 33]
let firstLargestNum = 0;
let secondLargestNum = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] > firstLargestNum) {
        secondLargestNum = firstLargestNum
        firstLargestNum = array[i]
    } else if (array[i] > secondLargestNum && array[i] !== firstLargestNum) {
        secondLargestNum = array[i]
    }
}
console.log(firstLargestNum);
console.log(secondLargestNum);
