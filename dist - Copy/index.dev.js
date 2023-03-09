"use strict";

var screen = document.querySelector(".screen");
var buttons = document.querySelectorAll("button");
var calculate = [];
var accumilative;

function calculation(button) {
  var value = button.textContent;

  if (value === "CLEAR") {
    calculate = [];
    screen.textContent = ".";
  } else if (value === "=") {
    screen.textContent = eval(accumilative);
  } else {
    calculate.push(value);
    accumilative = calculate.join("");
    screen.textContent = accumilative;
  }
}

buttons.forEach(function (button) {
  return button.addEventListener("click", function () {
    return calculation(button);
  });
});