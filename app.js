const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

// execute any operation
const operate = function (a, b, op) {
  return op(a, b);
};

// intialize
let operatorBtns = document.querySelectorAll(".operator");
let expression = document.getElementById("expression");
let firstNum,
  secondNum = 0;
let operation = "";

const buttonsOn = function () {
  // re-enable operator buttons
  for (btn of operatorBtns) {
    btn.className = "operator";
    btn.disabled = false;
  }
};

// construct and display the expression to evaluate
const display = function (value) {
  // reset button
  if (value == "c") {
    expression.textContent = "";
    firstNum = 0;
    secondNum = 0;
    operation = "";
    buttonsOn();
  } else if (value == "=") {
    // avoid bug
    if (operation == "-" && firstNum < 0) {
      secondNum = expression.textContent.substring(1); // remove first "-"
      secondNum = +secondNum.substring(secondNum.indexOf("-") + 1); // + to convert to number
    } else {
      secondNum = +expression.textContent.substring(
        expression.textContent.indexOf(operation) + 1
      ); // + to convert to number
    }
    switch (operation) {
      case "+":
        operation = add;
        break;
      case "-":
        operation = subtract;
        break;
      case "*":
        operation = multiply;
        break;
      case "/":
        operation = divide;
        break;
    }
    // calculate and display result
    expression.textContent = operate(firstNum, secondNum, operation);
    buttonsOn();
  } else {
    // build expression
    if (value == "+" || value == "-" || value == "*" || value == "/") {
      firstNum = +expression.textContent; // + to convert to number
      operation = value;
      // disable operator buttons
      for (btn of operatorBtns) {
        btn.className = "off";
        btn.disabled = true;
      }
    }
    expression.textContent += value;
  }
};

// click on buttons to display their value
let buttons = document.querySelectorAll("button");
for (btn of buttons) {
  let btnId = btn.id; // inside loop otherwise it's always the last btn of the nodeList
  btn.addEventListener("click", () => display(btnId));
}
