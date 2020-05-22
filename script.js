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
