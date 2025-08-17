
let lhs = 0;
let rhs = 0;
let operator = undefined;

const buttons = document.querySelectorAll(".num");
const label = document.querySelector("label");
const clearBtn = document.querySelector('.clear');
const signs = document.querySelectorAll(".sign");
const dotBtn = document.querySelector(".dot");

dot.addEventListener('click', () => {

})


clearBtn.addEventListener("click", (event) => {
  clearDisplay(label);
  event.stopImmediatePropagation();
})

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

function updateDisplay(display) {
  display.textContent = `${lhs != undefined ? lhs : ''} ${operator != undefined ? operator : ''} ${operator === undefined && rhs === 0 ? "" : rhs}`
}

function clearDisplay(display) {
  lhs = 0;
  rhs = 0;
  operator = undefined;
  updateDisplay(display);
}


buttons.forEach((btn) => {
  let num = Number(btn.textContent);
  if (Number.isInteger(num)) {
    btn.addEventListener('click', () => {
      if (operator === undefined) {
        lhs = lhs * 10 + num;
      }
      else if (operator != undefined) {
        rhs = rhs * 10 + num;
      }

      updateDisplay(label);
    })
  }
});


signs.forEach((sign) => {
  let op = sign.textContent;
  op = op.trim();
  sign.addEventListener('click', () => {
    switch (op) {
      case '/':
        operator = '/';
        break;
      case 'x':
        operator = '*';
        break;
      case '-':
        operator = '-';
        break;
      case '%':
        operator = "%";
        break;
      case "+":
        operator = '+';
      default:
        break;
    }

    updateDisplay(label);
  })
});


