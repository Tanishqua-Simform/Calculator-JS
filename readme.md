# Calculator

A fully functional calculator built using **HTML, CSS, and JavaScript**. This calculator supports basic arithmetic operations, memory functions, and keyboard input for a seamless user experience.

## Features

- **Basic Operations**: Addition (+), Subtraction (-), Multiplication (×), Division (÷)
- **Advanced Functions**: Square (x²), Modulus (%), Inverse (1/x)
- **Memory Functions**:
  - `MC` (Memory Clear) - Clears stored memory
  - `MR` (Memory Recall) - Recalls stored memory
  - `M+` (Memory Add) - Adds displayed value to memory
  - `M-` (Memory Subtract) - Subtracts displayed value from memory
  - `MS` (Memory Store) - Stores the displayed value in memory
- **Keyboard Support**:
  - `0-9` for numbers
  - `+`, `-`, `*`, `/` for operations
  - `Enter` to calculate (`=`)
  - `Escape` to clear (`C`)
  - `Backspace` to delete the last entry

## Technologies Used

- **HTML**: For the structure and layout of the webpage.
- **CSS**: For styling and responsiveness.
- **JS**: For functionality and event handling.
- **Google Material Icons**: For using icons across the site.

## File Structure

```
calculator-JS/
│── index.html   # Main HTML file
│── style.css    # Styles for calculator UI
│── app.js       # JavaScript logic for calculations and event handling
├── images/      # Folder containing images
└── readme.md    # Documentation file (this file)
```

## How to Run the Project

1. Clone this repository or download the files.
2. Open `index.html` in your browser.
3. Start using the calculator!

## Preview

Calculator [Preview](/images/Calc-Preview.png)

## How It Works

- Clicking buttons updates the display.
- Keyboard input enables fast calculations.
- Memory functions store and recall values.
- Error handling prevents invalid calculations.

## Validations Covered

- For buttons without functionality display "Non Functional".
- Single decimal point in a numeric value.
- Balanced brackets, else display specific error.
- If 2 operators pressed together, then latter should overwrite the previous.
- Clear after the result or Non Functional key is pressed.
- If leading zero then slice it, else keep the trailing zeroes.
- If decimal pressed instantly after operator then append "0."
- Close Parenthesis not before Open Parenthesis.
- On '(' pressed, if leading is 0 then replace 0 by '('.
- Cannot press operator after '(', but only after a numeric value.
- Equal number of open and close parenthesis.
- Make "number(" to display as "number\*(".
- "()()" becomes "()\*()".
- Cannot enter empty parenthesis.
- Make "50.+2" as "50.0+2".
- For keyboard input use - 0-9, . (decimal), +, -, \*, /, esc (to clear), backspace, enter (to evaluate), shift+9 [for '(' ], shift+0 [for ')']
- All other keyboard press won't affect the display.

## Future Scope

1. Add functionalities for advanced methods - Square-root, Logarithm, Trigonometry and so on..
2. Cover the validations for added functions as well.

## Credits

- **Icons**: Google Material Icons.

## Developer

This project has been developed by Tanishqua, as a part of her training journey at Simform Solutions.

###### Thank you for stopping by!
