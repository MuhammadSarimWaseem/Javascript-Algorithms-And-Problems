function ArrayReducer(array, init) {
    for (let i = 0; i < array.length; i++) {
        init = array[i] + init
    }
    return init
}

const array = [1, 2, 3, 4]
let init = 0
const result = ArrayReducer(array, init)
console.log(result);

