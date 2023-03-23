const operatorKeys = document.querySelectorAll(".operator");
const numKeys = document.querySelectorAll(".digit");
const decimal = document.getElementById("decimal");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");
const screen = document.getElementById("screen");

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
        if (operator === "/") {
            if (num1 === 0 || num2 === 0) return "ERROR";
            return divide(num1, num2);
        }
    }

    const total = operate(operator, num1, num2);
    if (total % 1 > 0) {
        return parseFloat(total.toFixed(4));
    } else {
        return total;   
    }
};

let userNum = "";

numKeys.forEach(key => {
    key.addEventListener("click", e => {
        userNum = userNum + e.target.textContent;
        displayValue(userNum);
        enableOperatorKeys();
        enableEquals();
    })
});

let operator;
// let operatorsClicked = 0;
let nextUserNum = "";
let userTotal = "";

operatorKeys.forEach(operatorKey => {
    operatorKey.addEventListener("click", e => {
        // operatorsClicked++;
        if (userTotal != "") {
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
        disableEquals();
        disableOperators();
    });
});

decimal.addEventListener("click", () => {
    userNum = userNum + ".";
    displayValue(userNum);
    decimal.disabled = true;
});


equals.addEventListener("click", () => {
    if (userTotal == "" || userNum == "") {
        equals.disabled = true;
    } else if (userTotal != "" && operator != "") {
        nextUserNum = userNum;
        userTotal = calculator(userTotal, nextUserNum, operator);
        displayValue(userTotal);
        endableDecimal();
        enableEquals();
        userNum = userTotal;
        nextUserNum = "";
        userTotal = "";
    }
});


clear.addEventListener("click", () => resetCalculator());

function displayValue(content) {
    screen.innerHTML = content;
}

function clearUserNum() {
    userNum = "";
}

function disableOperators() {
    operatorKeys.forEach(key => key.disabled = true);
}

function enableOperatorKeys() {
    operatorKeys.forEach(key => key.disabled = false);   
}

function endableDecimal() {
    decimal.disabled = false;
}

function enableEquals() {
    equals.disabled = false;
}

function disableEquals() {
    equals.disabled = true;
}

function resetCalculator() {
    clearUserNum();
    displayValue("");
    endableDecimal();
    enableEquals();
    enableOperatorKeys();
    operator = "";
    // operatorsClicked = 0;
    nextUserNum = "";
    userTotal = "";
    userNum = "";
}