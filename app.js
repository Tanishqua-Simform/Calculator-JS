document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  let currentInput = "0";
  let decimal = false;
  let clear = false;
  let openBrac = 0;
  let closeBrac = 0;
  let number = false;
  let memory = 0;

  // Helper function to update the display
  function updateDisplay() {
    display.textContent = currentInput;
  }

  // Function to handle numeric input
  function handleNumber(value) {
    let lastInput = currentInput.slice(-1);
    if (lastInput === "0" && !number) {
      currentInput = currentInput.slice(0, -1) + value;
    } else if (value === "0" && !number) {
      currentInput += value;
    } else if (lastInput === ")") {
      currentInput += "*" + value;
    } else {
      currentInput += value;
      number = true;
    }
    lastOperator = false;
  }

  // Function to handle decimal point input
  function handleDecimal() {
    let lastInput = currentInput.slice(-1);
    if (!".0123456789".includes(lastInput)) {
      currentInput += "0.";
    } else if (!decimal) {
      currentInput += ".";
    }
    decimal = true;
  }

  // Function to handle clear input (C)
  function handleClear() {
    currentInput = "0";
    decimal = false;
    openBrac = 0;
    closeBrac = 0;
    number = false;
  }

  // Function to handle backspace input
  function handleBackspace() {
    let lastInput = currentInput.slice(-1);
    if (lastInput === ".") {
      decimal = false;
    }
    currentInput = currentInput.slice(0, -1) || "0";
    if (currentInput === "0") {
      number = false;
    }
  }

  // Function to handle plus/minus toggle
  function handlePlusMinus() {
    handleEqual();
    currentInput = (parseFloat(currentInput) * -1).toString();
  }

  // Function to handle the equal sign (=) operation
  function handleEqual() {
    try {
      if (openBrac === closeBrac) {
        currentInput = eval(currentInput).toString();
      } else {
        currentInput = "Brac not equal!";
      }
      clear = true;
    } catch (error) {
      console.log(error);
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

  // Function to handle parenthesis
  function handleParenthesis(brac) {
    let lastInput = currentInput.slice(-1);
    isDigit = "0123456789".includes(lastInput);
    isClose = lastInput === ")";
    if (brac == "(" && currentInput === "0") {
      currentInput = brac;
      openBrac++;
    } else if (brac === "(" && !isDigit && !isClose) {
      currentInput += brac;
      openBrac++;
    } else if (brac === ")" && openBrac > closeBrac && (isDigit || isClose)) {
      currentInput += brac;
      closeBrac++;
    } else if (brac === "(" && (isDigit || isClose)) {
      currentInput += "*" + brac;
      openBrac++;
      decimal = false;
    }
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
    } else if (lastInput === ".") {
      currentInput += "0";
    }
    if (lastInput !== "(") {
      currentInput += op;
      decimal = false;
      number = false;
    }
  }

  // Function to handle Memory Operations (MC, MR, MS, M+, M-)
  function handleMemoryOperations(op) {
    handleEqual();
    const num = parseFloat(currentInput);
    switch (op) {
      case "MC":
        memory = 0;
        break;
      case "MR":
        currentInput = "Mem : " + memory.toString();
        break;
      case "M+":
        memory += num;
        break;
      case "M-":
        memory -= num;
        break;
      case "MS":
        memory = num;
        break;
    }
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
      } else if (
        id === "backspace" ||
        id === "backIcon" ||
        id === "backIconPath"
      ) {
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
      } else if (id === "leftParenthesis" || id === "rightParenthesis") {
        handleParenthesis(value);
      } else if (["MC", "MR", "M+", "M-", "MS"].includes(id)) {
        handleMemoryOperations(id);
      } else {
        handleOther();
      }

      updateDisplay();
    });
  });

  // Event Listener for keyboard press
  document.addEventListener("keydown", (e) => {
    const key = e.key;

    if (clear) {
      handleClear();
      clear = false;
    }
    if ("0123456789".includes(key)) {
      handleNumber(key);
    } else if (key === ".") {
      handleDecimal();
    } else if (key === "Backspace") {
      handleBackspace();
    } else if (key === "Escape") {
      handleClear();
    } else if (key === "Enter") {
      handleEqual();
    } else if (["+", "-", "*", "/"].includes(key)) {
      handleOperator(key);
    } else if (key === "(" || key === ")") {
      handleParenthesis(key);
    } else if (key === "Shift") {
      console.log("Eat 5 star do nothing!");
    } else {
      console.log(key);
    }

    updateDisplay();
  });
});
