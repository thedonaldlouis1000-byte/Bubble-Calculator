let displayValue = "0";

function updateDisplay() {
    const displayElement = document.getElementById('display');
    displayElement.value = displayValue;

    // AUTO-SCROLL TO THE END
    // This tells the "window" to slide all the way to the right every time 
    // a new number is added.
    displayElement.scrollLeft = displayElement.scrollWidth;
}


function appendNumber(number) {
    if (displayValue === "0") displayValue = number;
    else displayValue += number;
    updateDisplay();
}

function appendOperator(operator) {
    displayValue += operator;
    updateDisplay();
}

function clearDisplay() {
    displayValue = "0";
    updateDisplay();
}

function deleteLast() {
    if (displayValue === "Error") {
        displayValue = "0";
    } else {
        displayValue = displayValue.slice(0, -1);
    }

    if (displayValue === "") displayValue = "0";
    updateDisplay();
}

// Function to add the bubble animation to any button clicked
function animateButton(event) {
    const btn = event.target;
    btn.classList.add('bubble-effect');
    
    // Remove the class after animation finishes (300ms) 
    // so it can be triggered again next time
    setTimeout(() => {
        btn.classList.remove('bubble-effect');
    }, 300);
}
let scrollInterval;

function startScroll(offset) {
    const display = document.getElementById('display');
    // Clear any existing timer first
    stopScroll();
    
    // Create a loop that moves the scroll every 30 milliseconds
    scrollInterval = setInterval(() => {
        display.scrollLeft += offset;
    }, 30);
}

function stopScroll() {
    clearInterval(scrollInterval);
}


function calculate() {
    // 1. If the screen already says "Error", do nothing
    if (displayValue === "Error") {
        return; 
    }

    try {
        // 2. Perform the math
        let result = eval(displayValue);
        
        // 3. Make sure the result is a string so we can keep typing
        displayValue = result.toString();
    } catch (e) {
        // 4. If the math is impossible (like 5++5), show "Error"
        displayValue = "Error";
    }
    
    updateDisplay();
}

