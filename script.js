let op1 = undefined;
let op2 = undefined;
let operatorPressed = false;
let numberPressed = false;
let previousOperand = undefined;


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
    return num2 ? num1 / num2 : "Not a number"; 
}
//implement the switch operator that calls the maths functions
function operate(operator, num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    let result;
    switch(operator) {
        case 'bAdd': 
            result = add(num1, num2);
            break;
        case 'bSubtract': 
            result = subtract(num1, num2);
            break;
        case 'bMultiply': 
            result = multiply(num1, num2);
            break;
        case 'bDivide': 
            result = divide(num1, num2);
            break;
    }
    if (isNaN(result))
        result = "Not a number";
    return result;
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
    display.textContent = ""
    calculator.appendChild(display);
    //The button are drawn one by one
    //Row1
    const btnAC = document.createElement("div");
    btnAC.id = "btnAC";
    btnAC.className = "button top";
    const bAC = document.createElement("button");
    bAC.id = "bAC";
    bAC.className = "btns opt";
    bAC.type = "button";
    bAC.textContent = "AC";
    btnAC.appendChild(bAC);
    calculator.appendChild(btnAC);
    
    const btnInverse = document.createElement("div");
    btnInverse.id = "btnInverse";
    btnInverse.className = "button top";
    const bInverse = document.createElement("button");
    bInverse.id = "bInverse";
    bInverse.className = "btns opt";
    bInverse.type = "button";
    bInverse.textContent = "+/-";
    btnInverse.appendChild(bInverse);
    calculator.appendChild(btnInverse);

    const btnPercent = document.createElement("div");
    btnPercent.id = "btnPercent";
    btnPercent.className = "button top";
    const bPercent = document.createElement("button");
    bPercent.id = "bPercent";
    bPercent.className = "btns opt";
    bPercent.type = "button";
    bPercent.textContent = "\u0025";
    btnPercent.appendChild(bPercent);    
    calculator.appendChild(btnPercent);

    const btnDivide = document.createElement("div");
    btnDivide.id = "btnDivide";
    btnDivide.className = "button right";
    const bDivide = document.createElement("button");
    bDivide.id = "bDivide";
    bDivide.className = "btns opt";
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
    b7.className = "btns num";
    b7.type = "button";
    b7.textContent = "7";
    btn7.appendChild(b7);       
    calculator.appendChild(btn7);
    
    const btn8 = document.createElement("div");
    btn8.id = "btn8";
    btn8.className = "button";
    const b8 = document.createElement("button");
    b8.id = "b8";
    b8.className = "btns num";
    b8.type = "button";
    b8.textContent = "8";
    btn8.appendChild(b8);       
    calculator.appendChild(btn8);

    const btn9 = document.createElement("div");
    btn9.id = "btn9";
    btn9.className = "button";
    const b9 = document.createElement("button");
    b9.id = "b9";
    b9.className = "btns num";
    b9.type = "button";
    b9.textContent = "9";
    btn9.appendChild(b9);       
    calculator.appendChild(btn9);

    const btnMultiply = document.createElement("div");
    btnMultiply.id = "btnMultiply";
    btnMultiply.className = "button right";
    const bMultiply = document.createElement("button");
    bMultiply.id = "bMultiply";
    bMultiply.className = "btns opt";
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
    b4.className = "btns num";
    b4.type = "button";
    b4.textContent = "4";
    btn4.appendChild(b4);           
    calculator.appendChild(btn4);
    
    const btn5 = document.createElement("div");
    btn5.id = "btn5";
    btn5.className = "button";
    const b5 = document.createElement("button");
    b5.id = "b5";
    b5.className = "btns num";
    b5.type = "button";
    b5.textContent = "5";
    btn5.appendChild(b5);       
    calculator.appendChild(btn5);

    const btn6 = document.createElement("div");
    btn6.id = "btn6";
    btn6.className = "button";
    const b6 = document.createElement("button");
    b6.id = "b6";
    b6.className = "btns num";
    b6.type = "button";
    b6.textContent = "6";
    btn6.appendChild(b6);       
    calculator.appendChild(btn6);

    const btnSubtract = document.createElement("div");
    btnSubtract.id = "btnSubtract";
    btnSubtract.className = "button right";
    const bSubtract = document.createElement("button");
    bSubtract.id = "bSubtract";
    bSubtract.className = "btns opt";
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
    b1.className = "btns num";
    b1.type = "button";
    b1.textContent = "1";
    btn1.appendChild(b1);       
    calculator.appendChild(btn1);
    
    const btn2 = document.createElement("div");
    btn2.id = "btn2";
    btn2.className = "button";
    const b2 = document.createElement("button");
    b2.id = "b2";
    b2.className = "btns num";
    b2.type = "button";
    b2.textContent = "2";
    btn2.appendChild(b2);       
    calculator.appendChild(btn2);

    const btn3 = document.createElement("div");
    btn3.id = "btn3";
    btn3.className = "button";
    const b3 = document.createElement("button");
    b3.id = "b3";
    b3.className = "btns num";
    b3.type = "button";
    b3.textContent = "3";
    btn3.appendChild(b3);       
    calculator.appendChild(btn3);

    const btnAdd = document.createElement("div");
    btnAdd.id = "btnAdd";
    btnAdd.className = "button right";
    const bAdd = document.createElement("button");
    bAdd.id = "bAdd";
    bAdd.className = "btns opt";
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
    b0.className = "btns num";
    b0.type = "button";
    b0.textContent = "0";
    btn0.appendChild(b0);
    cell0.appendChild(btn0);
    
    const btnEmpty = document.createElement("div");
    btnEmpty.id = "btnEmpty";
    btnEmpty.className = "button";
    const bEmpty = document.createElement("button");
    bEmpty.id = "bEmpty";
    bEmpty.className = "btns num";
    bEmpty.type = "button";
    btnEmpty.appendChild(bEmpty);
    cell0.appendChild(btnEmpty);
    calculator.appendChild(cell0);
    
    const btnDot = document.createElement("div");
    btnDot.id = "btnDot";
    btnDot.className = "button";
    const bDot = document.createElement("button");
    bDot.id = "bDot";
    bDot.className = "btns num";
    bDot.type = "button";
    bDot.textContent = ".";
    btnDot.appendChild(bDot);
    calculator.appendChild(btnDot);

    const btnEqual = document.createElement("div");
    btnEqual.id = "btnEqual";
    btnEqual.className = "button right";
    const bEqual = document.createElement("button");
    bEqual.id = "bEqual";
    bEqual.className = "btns opt";
    bEqual.type = "button";
    bEqual.textContent = "\u003D";
    btnEqual.appendChild(bEqual);
    calculator.appendChild(btnEqual);

}

function addEventListeners(){
    //This function adds event listeners to all the required elements. 
    //It uses event bubbling 
    //Taken inspiration from https://dev.to/baransel/how-to-add-an-event-listener-to-multiple-elements-in-javascript-aco
    const operator = [...document.querySelectorAll('.opt')];
    const nums = [...document.querySelectorAll('.num')];
    const body = document.body;
    let opt = "";
    body.addEventListener('click', event => {
        //Handle when operators are clicked
        if (operator.includes(event.target)) {

            //Re-enable equal button
            bEqual.disabled = false;

            //Handle AC Button, clear everything
            if (event.target.id === 'bAC'){
                clearDisplay();
                setDisplay("0");
                op1 = undefined;
                op2 = undefined;
                operatorPressed = false;
                numberPressed = false;
                previousOperand = undefined;
            }
            if (event.target.id === 'bAdd' || event.target.id === 'bSubtract' || event.target.id === 'bMultiply' ||event.target.id === 'bDivide'){

                /* The first check is to see if a number has been pressed before. 
                This is to handle the case where user presses two operands one after the other, 
                the second one should override the first one, but no operation should take place*/

                if (numberPressed){
                    /* 
                There are two cases, either op1 is already set, or it's not. If op1 is not set, we set op1 and trigger operator pressed. 
                If Op1 is already set, we set op2, calculate and display
                */

                    if(op1){
                        //Op1 is already set
                        // This is where we do the main calculation
                        //First check to see if previous operand was equal, in which case we basically ignore
                        if (previousOperand === 'bEqual'){
                            op1 = getDisplay();
                            previousOperand = event.target.id;

                        }   
                        else {
                            op2 = getDisplay();
                            let res;
                            //Check to see if a previous operand has been set. 
                            // We will pass the previous operand to operate()
                            //This is to handle where  a user strings a bunch of operations after each other
                            if (previousOperand){
                                res =  operate(previousOperand, op1, op2);
                            }
                            else {
                                res = operate(event.target.id, op1, op2);
                            
                            }
                            previousOperand = event.target.id;
                            clearDisplay();
                            setDisplay(res);
                            op1 = getDisplay();
                        }

                    }    
                    else {
                        //When Op1 is not set
                        op1 = getDisplay();
                        previousOperand = event.target.id;
                    }
                } 
                else { 
                    // This is to handle a previously another operator was clicked, not a number
                    op1 = getDisplay();
                    previousOperand = event.target.id;

                }
                numberPressed = false;
                operatorPressed = true;                
            }
            if (event.target.id === 'bEqual'){
                if (op1 && previousOperand){
                    // disable equal button once it has been pressed once. Pressing it repeatedly has undefined behaviour
                    // and can cause errors
                    bEqual.disabled = true;

                    op2 = getDisplay();
                    let res = operate(previousOperand, op1, op2);
                    previousOperand = 'bEqual';
                    clearDisplay();
                    setDisplay(res);
                    op1 = getDisplay();  
                }
                numberPressed = false;
                operatorPressed = true;
            }
    
        }
        else if (nums.includes(event.target)) {
            numberPressed = true;
            //Handle when numbers are clicked
            // There are two cases, either the operator is pressed, or it's not. 
            // If it is pressed, we clear the display, set the display anew 
            // If operator is not pressed, we just add the number to display
            if (operatorPressed){
                clearDisplay();
                setDisplay(event.target.textContent);
                //This is to handle the empty button that's equivalent to 0
                if (event.target.id === 'bEmpty')
                    setDisplay(b0.textContent);
                operatorPressed = false;

            }
            else {
                setDisplay(event.target.textContent);
                //This is to handle the empty button that's equivalent to 0
                if (event.target.id === 'bEmpty')
                    setDisplay(b0.textContent);
            }    
        }
    });
}

function setDisplay(str){
    const display = document.getElementById("display");
    display.textContent === '0' ? display.textContent = str : display.textContent = getDisplay() + str;
    
}
function getDisplay(){
    const display = document.getElementById("display");
    return display.textContent;
}

function clearDisplay(){
    const display = document.getElementById("display");
    display.textContent = "";
}


drawBasicCalculator();
addEventListeners();
