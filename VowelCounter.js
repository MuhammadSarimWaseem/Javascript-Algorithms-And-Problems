const variable = "Javascript";
const convertVariableToLowercase = variable.toLowerCase();
const splitVariable = convertVariableToLowercase.split("");
let count = 0;

for (let i = 0; i < splitVariable.length; i++) {
    if (splitVariable[i] === "a" || splitVariable[i] === "e" || splitVariable[i] === "i" || splitVariable[i] === "o" || splitVariable[i] === "u") {
        count++;
    }
}

console.log(count);
