function flat(arr, n) {
    let result = arr.flat(n)
    return result

};

let arr1 = flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 0)
let arr2 = flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1)
let arr3 = flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 2)


console.log(arr1);
console.log(arr2);
console.log(arr3);
