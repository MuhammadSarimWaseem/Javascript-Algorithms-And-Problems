var addTwoPromises = async function (promise1, promise2) {
    const val1 = await promise1;  // Waits for the first promise to resolve
    const val2 = await promise2;  // Waits for the second promise to resolve
    return val1 + val2;           // Returns the sum
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2))
    .then(console.log); 
