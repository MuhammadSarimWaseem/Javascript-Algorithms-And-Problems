function isEmpty(obj) {

    let result;
    if (Object.keys(obj).length == 0) {
        result = true
    } else {
        result = false
    }
    return result

}
let result = isEmpty({ "x": 5, "y": 42 })
console.log(result);
