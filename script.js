let a = 5;
let b = 10;
function add(x, y) {
    return x + y;
}
let result = add(a, b);
console.log("The result of adding a and b is: " + result);

function multiply(x, y) {
    return x * y;
}
let product = multiply(a, b);
console.log("The result of multiplying a and b is: " + product);

function subtract(x, y) {
    return x - y;
}
let difference = subtract(a, b);
console.log("The result of subtracting b from a is: " + difference);

function divide(x, y) {
    if (y !== 0) {
        return x / y;
    } else {
        return "Cannot divide by zero";
    }
}
let quotient = divide(a, b);
console.log("The result of dividing a by b is: " + quotient);
