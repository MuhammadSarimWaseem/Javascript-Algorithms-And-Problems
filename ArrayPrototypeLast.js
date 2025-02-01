Array.prototype.last = function () {
    let temp;
    temp = this.length
    if (this.length == 0) {
        temp = -1
        return temp
    } else {
        return temp
    }
}

console.log([null, {}, 3].last());
console.log([].last()); 