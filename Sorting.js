
let ArrayInAscendingOrder = [4, -2, -4, 5, 6, 8, 1, 2, 99, 34, -67, 2, 1, 0, -4, 2, 4, 66, 7, 8, 89, 9, 9, -6, -4]
let swap;
for (let i = 0; i < ArrayInAscendingOrder.length; i++) {
    for (let j = i + 1; j < ArrayInAscendingOrder.length; j++) {
        if (ArrayInAscendingOrder[i] > ArrayInAscendingOrder[j]) {
            swap = ArrayInAscendingOrder[j]
            ArrayInAscendingOrder[j] = ArrayInAscendingOrder[i]
            ArrayInAscendingOrder[i] = swap
        }
    }
}

console.log(ArrayInAscendingOrder);







function Sorting(ArrayInDescendingOrder) {
    let swap;
    for (let i = 0; i < ArrayInDescendingOrder.length; i++) {
        for (let j = i + 1; j < ArrayInDescendingOrder.length; j++) {
            if (ArrayInDescendingOrder[i] < ArrayInDescendingOrder[j]) {
                swap = ArrayInDescendingOrder[i]
                ArrayInDescendingOrder[i] = ArrayInDescendingOrder[j]
                ArrayInDescendingOrder[j] = swap
            }
        }
    }
    return ArrayInDescendingOrder
}

let ArrayInDescendingOrder = [4, -2, -4, 5, 6, 8, 1, 2, 99, 34, -67, 2, 1, 0, -4, 2, 4, 66, 7, 8, 89, 9, 9, -6, -4]
console.log(Sorting(ArrayInDescendingOrder));