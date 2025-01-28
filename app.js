document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  let currentInput = "0";
  let memory = 0;
  let lastOperator = "";
  let secondFunctionMode = false;

  // Helper function to update the display
  function updateDisplay() {
    display.textContent = currentInput;
  }

  // Function to handle numeric input
  function handleNumber(value) {
    if (currentInput === "0") {
      currentInput = value;
    } else {
      currentInput += value;
    }
  }

  // Function to handle decimal point input
  function handleDecimal() {
    if (!currentInput.includes(".")) {
      currentInput += ".";
    }
  }

  // Function to handle clear input (C)
  function handleClear() {
    currentInput = "0";
  }

  // Function to handle backspace input
  function handleBackspace() {
    currentInput = currentInput.slice(0, -1) || "0";
  }

  // Function to handle plus/minus toggle
  function handlePlusMinus() {
    currentInput = (parseFloat(currentInput) * -1).toString();
  }

  // Function to handle the equal sign (=) operation
  function handleEqual() {
    try {
      currentInput = eval(currentInput).toString();
    } catch (error) {
      currentInput = "Error";
    }
  }

  // Function to handle x² operation
  function handleSquare() {
    currentInput = Math.pow(parseFloat(currentInput), 2).toString();
  }

  // Function to handle 1/x operation
  function handleReciprocal() {
    currentInput = (1 / parseFloat(currentInput)).toString();
  }

  // Function to handle mod (%) operation
  function handleMod() {
    currentInput += "%";
  }

  // Function to handle other buttons
  function handleOther() {
    currentInput = "Not Functional";
  }

  // Function to handle operator input (+, -, x, /)
  function handleOperator(value) {
    if (lastOperator) {
      currentInput = `${currentInput} ${lastOperator} `;
    }
    lastOperator = value;
  }

  // Event listener for button clicks
  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      const value = e.target.textContent;

      if ("0123456789".includes(value)) {
        handleNumber(value);
      } else if (value === ".") {
        handleDecimal();
      } else if (value === "C") {
        handleClear();
      } else if (value === "Back") {
        handleBackspace();
      } else if (value === "+/-") {
        handlePlusMinus();
      } else if (value === "=") {
        handleEqual();
      } else if (value === "sqr") {
        handleSquare();
      } else if (value === "1/x") {
        handleReciprocal();
      } else if (value === "mod") {
        handleMod();
      } else if (["+", "-", "*", "/"].includes(value)) {
        handleOperator(value);
      } else {
        handleOther();
      }

      updateDisplay();
    });
  });
});
