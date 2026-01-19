const display = document.getElementById("display");
const equalBtn = document.getElementById("equals");
const clrBtn = document.getElementById("clrbtn");

let currentValue = "";
let previousValue = "";
let operator = "";

function appendNumber(num) {          // only defined function, isn't triggered
    currentValue += num;
    display.value = currentValue;
}

document.querySelectorAll(".number").forEach(btn => {  // this connects the function 
    btn.addEventListener("click", () => {              // appendNumber to each button click
        appendNumber(btn.textContent);
    })
})

function chooseOperator(op){      // only defined function, isn't triggered 
    if(currentValue === "") return;
    previousValue = currentValue;
    operator = op;
    currentValue = "";
    display.value = operator;
}

document.querySelectorAll(".operator").forEach(btn => {  // this is what connects the 
    btn.addEventListener("click", () => {          // chooseOperator to each operator button
        chooseOperator(btn.dataset.op);
    });
});

function calculate(){                      // calculation function
    let prev = Number(previousValue);      
    let curr = Number(currentValue);
    let result;

    if (operator === "/" && curr === 0) {
    display.value = "Error";
    currentValue = "";
    previousValue = "";
    operator = "";
    return;
}

    if(operator === "+") result = prev + curr;
    if(operator === "-") result = prev - curr;
    if(operator === "/") result = prev / curr;
    if(operator === "*") result = prev * curr;

    display.value = result;
    currentValue = result.toString();
    previousValue = "";
    operator = "";
}

equalBtn.addEventListener("click", calculate);    // connect to equal button

function clearAll(){    // defined function
    currentValue = "";
    previousValue = "";
    operator = "";
    display.value = "";
}

clrBtn.addEventListener("click", clearAll);   // connects to clear button


