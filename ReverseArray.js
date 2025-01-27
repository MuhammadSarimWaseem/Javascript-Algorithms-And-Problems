const array = [1, 2, 3, 4, 5]
for (let i = 0; i < Math.floor(array.length / 2); i++) {
    const reverse = array[i];
    array[i] = array[array.length - 1 - i]
    array[array.length - 1 - i] = reverse
}
console.log(array);
// output: [5,4,3,2,1]

// Reversing a list by swapping elements of list . By adding a condition in loop arr.len/2 which means 
// it is replacing first element with last and inc from start and dec from last and when it reach at the middle of the list it will stop