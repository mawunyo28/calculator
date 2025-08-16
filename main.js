
let lhs = undefined;
let rhs = undefined;
let operator = undefined;

function add(a, b) {
  return a + b;

}


function substract(a, b) {
  return a - b;
}


function multiply(a, b) {
  return a * b;
}


function divide(a, b) {
  return a / b;
}


function operate(a, operator, b) {
  switch (operator) {
    case '+':
      return add(a, b);
    // break;

    case '-':
      return substract(a - b);

    case '*':
      return multiply(a, b);

    case '/':
      return divide(a, b);

    default:
      break;
  }
}
