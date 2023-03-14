// Your calculator is going to contain functions for all of the basic math operators you 
// typically find on simple calculators, so start by creating functions for the following 
// items and testing them in your browser’s console.
// add
// subtract
// multiply
// divide
// Create a new function operate that takes an operator and 2 numbers and then calls one of 
// the above functions on the numbers.

// Calculator function(operator, num1, num2)
// Add function(num1, num2) and returns sum
// Subtract function(num1, num2) and returns difference
// Multiphy function(num1, num2) and returns product
// Divide function(num1, num2) and returns quotient
// Operate function(operator, num1, num2) and returns the result based on the operator provided

function Calculator(operator, num1, num2) {
    const add = (num1, num2) => {return num1 + num2}
    const subtract = (num1, num2) => {return num1 - num2}
    const multiply = (num1, num2) => {return num1 * num2}
    const divide = (num1, num2) => {return (num1 / num2)}
    
    function operate(operator, num1, num2) {
        if (operator === "+") return add(num1, num2);
        if (operator === "-") return subtract(num1, num2);
        if (operator === "*") return multiply(num1, num2);
        if (operator === "/") return divide(num1, num2);
    }

   return operate(operator, num1, num2);    
};

// Listen to each one of the number and decimal key for clicks
// Upon click add the value to the user number and display the number on the calc screen
// Disable the decimal key after first click until a none number key is clicked

const screen = document.getElementById("screen");
const numKeys = document.querySelectorAll(".digit");
let num1 = "";

numKeys.forEach(key => {
    key.addEventListener("click", e => {
        num1 = "" + num1 + e.target.textContent;
        screen.innerHTML = num1;
    })
});