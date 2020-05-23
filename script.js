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
    //The display id defined here
    const display = document.createElement("div");
    display.id = "display";
    display.style.gridColumnStart = 1;
    display.style.gridColumnEnd = 5;
    display.style.backgroundColor = "green";
    calculator.appendChild(display);
    //The button are drawn one by one
    //Row1
    const btnAC = document.createElement("div");
    btnAC.id = "btnAC";
    btnAC.className = "button top";
    calculator.appendChild(btnAC);
    
    const btnInverse = document.createElement("div");
    btnInverse.id = "btnInverse";
    btnInverse.className = "button top";
    calculator.appendChild(btnInverse);

    const btnPercent = document.createElement("div");
    btnPercent.id = "btnPercent";
    btnPercent.className = "button top";
    calculator.appendChild(btnPercent);

    const btnDivide = document.createElement("div");
    btnDivide.id = "btnDivide";
    btnDivide.className = "button right";
    calculator.appendChild(btnDivide);
    
    //The button are drawn one by one
    //Row2
    const btn7 = document.createElement("div");
    btn7.id = "btn7";
    btn7.className = "button";
    calculator.appendChild(btn7);
    
    const btn8 = document.createElement("div");
    btn8.id = "btn8";
    btn8.className = "button";
    calculator.appendChild(btn8);

    const btn9 = document.createElement("div");
    btn9.id = "btn9";
    btn9.className = "button";
    calculator.appendChild(btn9);

    const btnMultiply = document.createElement("div");
    btnMultiply.id = "btnMultiply";
    btnMultiply.className = "button right";
    calculator.appendChild(btnMultiply);

    //The button are drawn one by one
    //Row3
    const btn4 = document.createElement("div");
    btn4.id = "btn4";
    btn4.className = "button";
    calculator.appendChild(btn4);
    
    const btn5 = document.createElement("div");
    btn5.id = "btn5";
    btn5.className = "button";
    calculator.appendChild(btn5);

    const btn6 = document.createElement("div");
    btn6.id = "btn6";
    btn6.className = "button";
    calculator.appendChild(btn6);

    const btnSubtract = document.createElement("div");
    btnSubtract.id = "btnSubtract";
    btnSubtract.className = "button right";
    calculator.appendChild(btnSubtract);

    //The button are drawn one by one
    //Row4
    const btn1 = document.createElement("div");
    btn1.id = "btn1";
    btn1.className = "button";
    calculator.appendChild(btn1);
    
    const btn2 = document.createElement("div");
    btn2.id = "btn2";
    btn2.className = "button";
    calculator.appendChild(btn2);

    const btn3 = document.createElement("div");
    btn3.id = "btn3";
    btn3.className = "button";
    calculator.appendChild(btn3);

    const btnAdd = document.createElement("div");
    btnAdd.id = "btnAdd";
    btnAdd.className = "button right";
    calculator.appendChild(btnAdd);
   
    //The button are drawn one by one
    //Row5
    const btn0 = document.createElement("div");
    btn0.id = "btn0";
    btn0.className = "button";
    btn0.style.gridColumnStart = 1;
    btn0.style.gridColumnEnd = 3;
    calculator.appendChild(btn0);
    
    const btnDot = document.createElement("div");
    btnDot.id = "btnDot";
    btnDot.className = "button";
    calculator.appendChild(btnDot);

    const btnEqual = document.createElement("div");
    btnEqual.id = "btnEqual";
    btnEqual.className = "button right";
    calculator.appendChild(btnEqual);

}

drawBasicCalculator();