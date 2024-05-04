1.ON MODULE
Create a new module file named math.js that exports two functions: add and subtract. Implement each function to perform addition and subtraction of two numbers, respectively.Create a new file named app.js and import the math module. Use the add and subtract functions to perform arithmetic operations and display the results in the console.
--->

// math.js
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

module.exports = { add, subtract };


// app.js
const math = require('./math');

const num1 = 10;
const num2 = 5;

const sum = math.add(num1, num2);
const difference = math.subtract(num1, num2);

console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
console.log(`The difference between ${num1} and ${num2} is: ${difference}`);