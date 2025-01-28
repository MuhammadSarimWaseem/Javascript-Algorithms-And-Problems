function Compose(functions) {
    return function (x) {
        return functions.reduceRight((acc, fn) => fn(acc), x);
    };
}

const fn = Compose([x => x + 1, x => x * x, x => 2 * x]);
console.log(fn(4)); 
