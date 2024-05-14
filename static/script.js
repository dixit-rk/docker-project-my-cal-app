let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

function clearDisplay() {
    currentInput = '';
    operator = '';
    previousInput = '';
    updateDisplay('0');
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput || '0');
}

function appendNumber(number) {
    currentInput += number;
    updateDisplay(currentInput);
}

function appendOperator(op) {
    if (currentInput === '' && previousInput === '') return;
    if (currentInput !== '') {
        if (previousInput !== '') {
            calculateResult();
        }
        previousInput = currentInput;
        currentInput = '';
    }
    operator = op;
}

function calculateResult() {
    if (currentInput === '' || previousInput === '') return;
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(previousInput) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(previousInput) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(previousInput) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(previousInput) / parseFloat(currentInput);
            break;
        default:
            return;
    }
    updateDisplay(result);
    currentInput = result.toString();
    previousInput = '';
    operator = '';
}

function updateDisplay(value) {
    display.textContent = value;
}
