Array.prototype.last = function () {
    let temp;
    if (this.length > 0) {
        temp = this[this.length - 1]
    } else {
        temp = -1
    }
    return temp
}

console.log([null, {}, 4].last());
console.log([].last()); 