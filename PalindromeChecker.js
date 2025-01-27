// Palindromes are words, phrases, numbers, or other sequences of characters that read the same backward as they do forward, ignoring spaces, punctuation, and capitalization.

let str = "Malayalam";
let strInLowerCase = str.toLowerCase(); 
let Palindrome = strInLowerCase.split(""); 

for (let i = 0; i < Math.floor(Palindrome.length / 2); i++) {
    const temp = Palindrome[i];
    Palindrome[i] = Palindrome[Palindrome.length - 1 - i];
    Palindrome[Palindrome.length - 1 - i] = temp;
}

let updatedString = Palindrome.join(""); // Create the reversed string after the loop

if (updatedString === strInLowerCase) {
    console.log("true"); 
} else {
    console.log("false"); 
}

console.log("Reversed String:", updatedString); 