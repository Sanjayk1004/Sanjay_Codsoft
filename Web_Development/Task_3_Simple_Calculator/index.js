function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculateResult() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function clearDisplayEntry() {
    let currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
}

function clearDisplay() {
    document.getElementById('display').value = '';
}
