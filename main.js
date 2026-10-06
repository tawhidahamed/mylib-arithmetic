// Import arithmetic functions from the mylib module.
const { add, subtract, multiply, divide } = require("./mylib");

// Example numbers used to demonstrate the library.
const a = 10;
const b = 5;

console.log(`Addition: ${add(a, b)}`);
console.log(`Subtraction: ${subtract(a, b)}`);
console.log(`Multiplication: ${multiply(a, b)}`);
console.log(`Division: ${divide(a, b)}`);