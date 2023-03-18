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

function calculator(num1, num2, operator) {
    const add = (num1, num2) => {return num1 + num2}
    const subtract = (num1, num2) => {return num1 - num2}
    const multiply = (num1, num2) => {return num1 * num2}
    const divide = (num1, num2) => {return (num1 / num2)}
    
    function operate(operator, num1, num2) {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
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

// Reset calc should clear display, num values, reset decimal

const numKeys = document.querySelectorAll(".digit");
let userNum = "";

numKeys.forEach(key => {
    key.addEventListener("click", e => {
        userNum = createUserNum(e.target.textContent);
        displayValue(userNum);
    })
});

const operatorKeys = document.querySelectorAll(".operator");
let operator;

operatorKeys.forEach(operatorKey => {
    operatorKey.addEventListener("click", e => {
        operator = e.target.textContent;
        storeOperater(operator);
        storeNum(userNum);
        displayValue(operator);
        clearUserNum();
    });
});

const decimal = document.getElementById("decimal");

decimal.addEventListener("click", e => {
    userNum = userNum + ".";
    displayValue(userNum);
    decimal.disabled = true;
});

function createUserNum(num) {
    return userNum = userNum + num;
}

const equals = document.getElementById("equals");

equals.addEventListener("click", (e) => {
    let i = 0;
    const userTotal = userNumbers.reduce((total, currentNum) => {
        if (i === 0) {
            total = userNumbers[i];
            i++;
            return total;
        }
        total = calculator(total, currentNum, operators[i-1]);
        i++;
        return total;
    }, 0);
    displayValue(userTotal);
});

const screen = document.getElementById("screen");

function displayValue(content) {
    screen.innerHTML = content;
}

const userNumbers = [];
let userNumbersCounter = 0;

function storeNum(num) {
    userNumbers[userNumbersCounter] = num;
    userNumbersCounter++;
}

const operators = [];
let operatorsCounter = 0;

function storeOperater(operator) {
    operators[operatorsCounter] = operator;
    operatorsCounter++;
}

function clearUserNum() {
    userNum = "";
}