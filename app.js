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
const operate = function (a, b, operation) {
  return operation(a, b);
};

// construct and display the expression to evaluate
const display = function (value) {
  let expression = document.getElementById("expression");

  if (value == "c") {
    expression.textContent = "";
  } else expression.textContent += value;
};

// click on buttons to display their value
let buttons = document.querySelectorAll("button");
for (btn of buttons) {
  let btnId = btn.id; // inside loop otherwise it's always the last btn of the nodeList
  btn.addEventListener("click", () => display(btnId));
}
