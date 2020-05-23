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
    const bAC = document.createElement("button");
    bAC.id = "bAC";
    bAC.className = "btns";
    bAC.type = "button";
    bAC.textContent = "AC";
    btnAC.appendChild(bAC);
    calculator.appendChild(btnAC);
    
    const btnInverse = document.createElement("div");
    btnInverse.id = "btnInverse";
    btnInverse.className = "button top";
    const bInverse = document.createElement("button");
    bInverse.id = "bInverse";
    bInverse.className = "btns";
    bInverse.type = "button";
    bInverse.textContent = "+/-";
    btnInverse.appendChild(bInverse);
    calculator.appendChild(btnInverse);

    const btnPercent = document.createElement("div");
    btnPercent.id = "btnPercent";
    btnPercent.className = "button top";
    const bPercent = document.createElement("button");
    bPercent.id = "bPercent";
    bPercent.className = "btns";
    bPercent.type = "button";
    bPercent.textContent = "\u0025";
    btnPercent.appendChild(bPercent);    
    calculator.appendChild(btnPercent);

    const btnDivide = document.createElement("div");
    btnDivide.id = "btnDivide";
    btnDivide.className = "button right";
    const bDivide = document.createElement("button");
    bDivide.id = "bDivide";
    bDivide.className = "btns";
    bDivide.type = "button";
    bDivide.textContent = "\u00F7";
    btnDivide.appendChild(bDivide);    
    calculator.appendChild(btnDivide);
    
    //The button are drawn one by one
    //Row2
    const btn7 = document.createElement("div");
    btn7.id = "btn7";
    btn7.className = "button";
    const b7 = document.createElement("button");
    b7.id = "b7";
    b7.className = "btns";
    b7.type = "button";
    b7.textContent = "7";
    btn7.appendChild(b7);       
    calculator.appendChild(btn7);
    
    const btn8 = document.createElement("div");
    btn8.id = "btn8";
    btn8.className = "button";
    const b8 = document.createElement("button");
    b8.id = "b8";
    b8.className = "btns";
    b8.type = "button";
    b8.textContent = "8";
    btn8.appendChild(b8);       
    calculator.appendChild(btn8);

    const btn9 = document.createElement("div");
    btn9.id = "btn9";
    btn9.className = "button";
    const b9 = document.createElement("button");
    b9.id = "b9";
    b9.className = "btns";
    b9.type = "button";
    b9.textContent = "9";
    btn9.appendChild(b9);       
    calculator.appendChild(btn9);

    const btnMultiply = document.createElement("div");
    btnMultiply.id = "btnMultiply";
    btnMultiply.className = "button right";
    const bMultiply = document.createElement("button");
    bMultiply.id = "bMultiply";
    bMultiply.className = "btns";
    bMultiply.type = "button";
    bMultiply.textContent = "\u00D7";
    btnMultiply.appendChild(bMultiply);       
    calculator.appendChild(btnMultiply);

    //The button are drawn one by one
    //Row3
    const btn4 = document.createElement("div");
    btn4.id = "btn4";
    btn4.className = "button";
    const b4 = document.createElement("button");
    b4.id = "b4";
    b4.className = "btns";
    b4.type = "button";
    b4.textContent = "4";
    btn4.appendChild(b4);           
    calculator.appendChild(btn4);
    
    const btn5 = document.createElement("div");
    btn5.id = "btn5";
    btn5.className = "button";
    const b5 = document.createElement("button");
    b5.id = "b5";
    b5.className = "btns";
    b5.type = "button";
    b5.textContent = "5";
    btn5.appendChild(b5);       
    calculator.appendChild(btn5);

    const btn6 = document.createElement("div");
    btn6.id = "btn6";
    btn6.className = "button";
    const b6 = document.createElement("button");
    b6.id = "b6";
    b6.className = "btns";
    b6.type = "button";
    b6.textContent = "6";
    btn6.appendChild(b6);       
    calculator.appendChild(btn6);

    const btnSubtract = document.createElement("div");
    btnSubtract.id = "btnSubtract";
    btnSubtract.className = "button right";
    const bSubtract = document.createElement("button");
    bSubtract.id = "bSubtract";
    bSubtract.className = "btns";
    bSubtract.type = "button";
    bSubtract.textContent = "-";
    btnSubtract.appendChild(bSubtract);       
    calculator.appendChild(btnSubtract);

    //The button are drawn one by one
    //Row4
    const btn1 = document.createElement("div");
    btn1.id = "btn1";
    btn1.className = "button";
    const b1 = document.createElement("button");
    b1.id = "b1";
    b1.className = "btns";
    b1.type = "button";
    b1.textContent = "1";
    btn1.appendChild(b1);       
    calculator.appendChild(btn1);
    
    const btn2 = document.createElement("div");
    btn2.id = "btn2";
    btn2.className = "button";
    const b2 = document.createElement("button");
    b2.id = "b2";
    b2.className = "btns";
    b2.type = "button";
    b2.textContent = "2";
    btn2.appendChild(b2);       
    calculator.appendChild(btn2);

    const btn3 = document.createElement("div");
    btn3.id = "btn3";
    btn3.className = "button";
    const b3 = document.createElement("button");
    b3.id = "b3";
    b3.className = "btns";
    b3.type = "button";
    b3.textContent = "3";
    btn3.appendChild(b3);       
    calculator.appendChild(btn3);

    const btnAdd = document.createElement("div");
    btnAdd.id = "btnAdd";
    btnAdd.className = "button right";
    const bAdd = document.createElement("button");
    bAdd.id = "bAdd";
    bAdd.className = "btns";
    bAdd.type = "button";
    bAdd.textContent = "+";
    btnAdd.appendChild(bAdd);       
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
    const b0 = document.createElement("button");
    b0.id = "b0";
    b0.className = "btns";
    b0.type = "button";
    b0.textContent = "0";
    btn0.appendChild(b0);
    cell0.appendChild(btn0);
    
    const btnEmpty = document.createElement("div");
    btnEmpty.id = "btnEmpty";
    btnEmpty.className = "button";
    const bEmpty = document.createElement("button");
    bEmpty.id = "bEmpty";
    bEmpty.className = "btns";
    bEmpty.type = "button";
    btnEmpty.appendChild(bEmpty);
    cell0.appendChild(btnEmpty);
    calculator.appendChild(cell0);

    
    
    const btnDot = document.createElement("div");
    btnDot.id = "btnDot";
    btnDot.className = "button";
    const bDot = document.createElement("button");
    bDot.id = "bDot";
    bDot.className = "btns";
    bDot.type = "button";
    bDot.textContent = ".";
    btnDot.appendChild(bDot);
    calculator.appendChild(btnDot);

    const btnEqual = document.createElement("div");
    btnEqual.id = "btnEqual";
    btnEqual.className = "button right";
    const bEqual = document.createElement("button");
    bEqual.id = "bEqual";
    bEqual.className = "btns";
    bEqual.type = "button";
    bEqual.textContent = "\u003D";
    btnEqual.appendChild(bEqual);
    calculator.appendChild(btnEqual);

}

drawBasicCalculator();