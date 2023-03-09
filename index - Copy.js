const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");

let calculate = [];
let accumilative;
function calculation(button) {
  const value = button.textContent;

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

buttons.forEach((button) =>
  button.addEventListener("click", () => calculation(button))    
);
