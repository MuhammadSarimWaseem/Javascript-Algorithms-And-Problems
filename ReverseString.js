let str = "hello";
let arr = str.split(""); // Convert the string to an array

for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    const temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
}

str = arr.join(""); // Convert the array back to a string
console.log(str); // Output: "olleh"
