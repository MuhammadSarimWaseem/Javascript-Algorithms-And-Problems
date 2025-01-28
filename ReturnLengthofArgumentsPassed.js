function argumentsLength() {
    let num = 0
    for (let i = 0; i < arguments.length; i++) {
        num = num + 1
    }
    return num
}

let result1 = argumentsLength({}, null, "3")
let result2 = argumentsLength(5)
console.log(result1);
console.log(result2);
