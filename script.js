//implement basic maths functions
function add (num1, num2){
    return num1 + num2;
}
function subtract (num1, num2){
    return num1 - num2;
}
function multiply (num1, num2){
    return num1 * num2;
}
function divide (num1, num2){
    return num1 / num2;
}
//implement the switch operator that calls the maths functions
function operate(operator, num1, num2){
    switch(operator) {
        case 'add': 
            add(num1, num2);
            break;
        case 'subtract': 
            subtract(num1, num2);
            break;
        case 'multiply': 
            multiply(num1, num2);
            break;
        case 'divide': 
            divide(num1, num2);
            break;
    }
}
//Draw calculator with CSS in JS
function drawBasicCalculator(){
    const calculator = document.getElementById("calculator");
    calculator.style.display = "grid";
    calculator.style.gridTemplateColumns = "repeat(4, 1fr)";
    calculator.style.gridTemplateRows = "2fr repeat(5, 1fr)";
    calculator.style.gridGap = "1px";

    //The display id defined here
    const display = document.createElement("div");
    display.id = "display";
    display.style.gridColumnStart = 1;
    display.style.gridColumnEnd = 5;
    display.textContent = "7777000"
    calculator.appendChild(display);
    //The button are drawn one by one
    //Row1
    const btnAC = document.createElement("div");
    btnAC.id = "btnAC";
    btnAC.className = "button top";
    btnAC.textContent = "AC";
    calculator.appendChild(btnAC);
    
    const btnInverse = document.createElement("div");
    btnInverse.id = "btnInverse";
    btnInverse.className = "button top";
    btnInverse.textContent = "+/-";
    calculator.appendChild(btnInverse);

    const btnPercent = document.createElement("div");
    btnPercent.id = "btnPercent";
    btnPercent.className = "button top";
    btnPercent.textContent = "\u0025";
    calculator.appendChild(btnPercent);

    const btnDivide = document.createElement("div");
    btnDivide.id = "btnDivide";
    btnDivide.className = "button right";
    btnDivide.textContent = "\u00F7";
    calculator.appendChild(btnDivide);
    
    //The button are drawn one by one
    //Row2
    const btn7 = document.createElement("div");
    btn7.id = "btn7";
    btn7.className = "button";
    btn7.textContent = "7";
    calculator.appendChild(btn7);
    
    const btn8 = document.createElement("div");
    btn8.id = "btn8";
    btn8.className = "button";
    btn8.textContent = "8";
    calculator.appendChild(btn8);

    const btn9 = document.createElement("div");
    btn9.id = "btn9";
    btn9.className = "button";
    btn9.textContent = "9";
    calculator.appendChild(btn9);

    const btnMultiply = document.createElement("div");
    btnMultiply.id = "btnMultiply";
    btnMultiply.className = "button right";
    btnMultiply.textContent = "\u00D7";
    calculator.appendChild(btnMultiply);

    //The button are drawn one by one
    //Row3
    const btn4 = document.createElement("div");
    btn4.id = "btn4";
    btn4.className = "button";
    btn4.textContent = "4";
    calculator.appendChild(btn4);
    
    const btn5 = document.createElement("div");
    btn5.id = "btn5";
    btn5.className = "button";
    btn5.textContent = "5";
    calculator.appendChild(btn5);

    const btn6 = document.createElement("div");
    btn6.id = "btn6";
    btn6.className = "button";
    btn6.textContent = '6';
    calculator.appendChild(btn6);

    const btnSubtract = document.createElement("div");
    btnSubtract.id = "btnSubtract";
    btnSubtract.className = "button right";
    btnSubtract.textContent = "-";
    calculator.appendChild(btnSubtract);

    //The button are drawn one by one
    //Row4
    const btn1 = document.createElement("div");
    btn1.id = "btn1";
    btn1.className = "button";
    btn1.textContent = "1";
    calculator.appendChild(btn1);
    
    const btn2 = document.createElement("div");
    btn2.id = "btn2";
    btn2.className = "button";
    btn2.textContent = "2";
    calculator.appendChild(btn2);

    const btn3 = document.createElement("div");
    btn3.id = "btn3";
    btn3.className = "button";
    btn3.textContent = "3";
    calculator.appendChild(btn3);

    const btnAdd = document.createElement("div");
    btnAdd.id = "btnAdd";
    btnAdd.className = "button right";
    btnAdd.textContent = "+";
    calculator.appendChild(btnAdd);
   
    //The button are drawn one by one
    //Row5
    const cell0 = document.createElement("div");
    cell0.id = "cell0";
    cell0.style.gridColumnStart = 1;
    cell0.style.gridColumnEnd = 3;
    cell0.style.display = "grid";
    cell0.style.gridTemplateColumns = "repeat(2, 1fr)";
    
    
    const btn0 = document.createElement("div");
    btn0.id = "btn0";
    btn0.className = "button";
    btn0.textContent = "0";
    cell0.appendChild(btn0);
    
    const btnEmpty = document.createElement("div");
    btnEmpty.id = "btnEmpty";
    btnEmpty.className = "button";
    cell0.appendChild(btnEmpty);
    calculator.appendChild(cell0);

    
    
    const btnDot = document.createElement("div");
    btnDot.id = "btnDot";
    btnDot.className = "button";
    btnDot.textContent = ".";
    calculator.appendChild(btnDot);

    const btnEqual = document.createElement("div");
    btnEqual.id = "btnEqual";
    btnEqual.className = "button right";
    btnEqual.textContent = "\u003D";
    calculator.appendChild(btnEqual);

}

drawBasicCalculator();