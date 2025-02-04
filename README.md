# Uncaught TypeError: Cannot read properties of null (reading 'length')

This repository demonstrates a common JavaScript error: `Uncaught TypeError: Cannot read properties of null (reading 'length')`.  This error occurs when you try to access the `length` property of a variable that is currently `null` or `undefined`. This typically happens when dealing with objects or arrays that might not always be populated.

The `bug.js` file contains the erroneous code, and `bugSolution.js` provides a corrected version.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` in your preferred JavaScript environment (browser's console, Node.js, etc.).
3. Call the `foo` function with a `null` value as an argument.  You'll observe the error.

## Solution

The solution involves adding a check to ensure the variable is not null or undefined before accessing its `length` property. This can be achieved using optional chaining (`?.`) or a simple `if` statement, as shown in `bugSolution.js`.