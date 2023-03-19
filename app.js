
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

    const total = operate(operator, num1, num2);
    if (total % 1 > 0) {
        return total.toFixed(4);
    } else {
        return total;   
    }
};

const numKeys = document.querySelectorAll(".digit");
let userNum = "";

numKeys.forEach(key => {
    key.addEventListener("click", e => {
        userNum = userNum + e.target.textContent;
        displayValue(userNum);
    })
});

const operatorKeys = document.querySelectorAll(".operator");
let operator;
let operatorsClicked = 0;
let nextUserNum;
let userTotal;

operatorKeys.forEach(operatorKey => {
    operatorKey.addEventListener("click", e => {
        operatorsClicked++;
        if (operatorsClicked > 1) {
            nextUserNum = userNum;
            userTotal = calculator(userTotal, nextUserNum, operator);
            displayValue(userTotal);
         } else {
            userTotal = userNum;
            operator = e.target.textContent;
        }
        clearUserNum();
        operator = e.target.textContent;
        endableDecimal();
    });
});

const decimal = document.getElementById("decimal");

decimal.addEventListener("click", () => {
    userNum = userNum + ".";
    displayValue(userNum);
    decimal.disabled = true;
});

const equals = document.getElementById("equals");

equals.addEventListener("click", (e) => {
    displayValue(userTotal);
    endableDecimal();
});

const clear = document.getElementById("clear");

clear.addEventListener("click", () => resetCalculator());

const screen = document.getElementById("screen");

function displayValue(content) {
    screen.innerHTML = content;
}

function clearUserNum() {
    userNum = "";
}

function endableDecimal() {
    decimal.disabled = false;
}

function resetCalculator() {
    operatorsClicked = 0;
    clearUserNum();
    displayValue("");
    endableDecimal();
    operator = "";
    operatorsClicked = 0;
    nextUserNum = 0;
    userTotal = 0;
}