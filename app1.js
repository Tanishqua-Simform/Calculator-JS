document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  let currentInput = "0";
  let decimal = false;
  let clear = false;

  // Helper function to update the display
  function updateDisplay() {
    if (isNaN(currentInput) == true) {
      display.textContent = "0";
    }
    display.textContent = currentInput;
  }

  // Function to handle numeric input
  function handleNumber(value) {
    if (currentInput === "0") {
      currentInput = value;
    } else {
      currentInput += value;
    }
    lastOperator = false;
  }

  // Function to handle decimal point input
  function handleDecimal() {
    if (!decimal) {
      currentInput += ".";
      decimal = true;
    }
  }

  // Function to handle clear input (C)
  function handleClear() {
    currentInput = "0";
    decimal = false;
  }

  // Function to handle backspace input
  function handleBackspace() {
    let lastInput = currentInput.slice(-1);
    if (lastInput === ".") {
      decimal = false;
    }
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
      clear = true;
    } catch (error) {
      currentInput = "Error";
    }
  }

  // Function to handle x² operation
  function handleSquare() {
    currentInput = Math.pow(parseFloat(currentInput), 2).toString();
    clear = true;
  }

  // Function to handle 1/x operation
  function handleReciprocal() {
    let current = eval(currentInput);
    if (current === 0) {
      currentInput = "Cannot divide by 0";
    } else {
      currentInput = (1 / current).toString();
    }
    clear = true;
  }

  // Function to handle mod (%) operation
  function handleMod() {
    currentInput += "%";
  }

  // Function to handle other buttons
  function handleOther() {
    currentInput = "Not Functional";
    clear = true;
  }

  // Function to handle operator input (+, -, x, /)
  function handleOperator(op) {
    let lastInput = currentInput.slice(-1);
    if (["+", "-", "*", "/"].includes(lastInput)) {
      handleBackspace();
    }
    currentInput += op;
    decimal = false;
  }

  // Event listener for button clicks
  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = e.target.id;
      const value = e.target.textContent;

      if (clear) {
        handleClear();
        clear = false;
      }
      if (id === "num") {
        handleNumber(value);
      } else if (id === "decimal") {
        handleDecimal();
      } else if (id === "clear") {
        handleClear();
      } else if (id === "backspace") {
        handleBackspace();
      } else if (id === "plusMinus") {
        handlePlusMinus();
      } else if (id === "equal") {
        handleEqual();
      } else if (id === "sqr") {
        handleSquare();
      } else if (id === "reciprocal") {
        handleReciprocal();
      } else if (id === "mod") {
        handleMod();
      } else if (["add", "subtract", "multiply", "divide"].includes(id)) {
        handleOperator(value);
      } else {
        handleOther();
      }

      updateDisplay();
    });
  });
});
