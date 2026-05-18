// Lab 29: Backtick vs Single vs Double Quotes in JavaScript

let name = "Pramod";

// Single and double quotes are same - no variable interpolation
let single = 'Hello ' + name + '!';
let double = "Hello " + name + "!";
console.log("Single :", single);
console.log("Double :", double);

// Backtick (Template Literal) supports variable interpolation and multiline
let backtick = `Hello ${name}!`;
console.log("Backtick:", backtick);

// One key difference: only backticks allow multiline strings
let multi = `Line 1
Line 2
Line 3`;
console.log("Multiline with backtick:\n", multi);
