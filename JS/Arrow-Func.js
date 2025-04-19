//   Arrow Functions Start -------------------------

// Theory Start -------------

// Arrow functions in JavaScript are a shorter, cleaner way to write functions, introduced in ES6 (ECMAScript 2015). They're especially useful for writing concise callbacks and keeping code readable.

// Basic Syntax

// const add = (a, b) => a + b;

// ✅ Examples
// 1. No Parameters

// const greet = () => console.log("Hello!");

// 2. One Parameter (no need for parentheses)

// const square = x => x * x;

// 3. Multiple Parameters

// const multiply = (a, b) => a * b;

// 4. Block Body (with return)
// Use curly braces {} if you need multiple lines or logic.

// const divide = (a, b) => {
//   if (b === 0) return "Cannot divide by 0";
//   return a / b;
// };

// ❗️Important Differences vs. Regular Functions
// 1. No this Binding
// Arrow functions don’t have their own this — they inherit this from their surrounding scope (lexical this).

// Example:

// function Timer() {
//   this.seconds = 0;
//   setInterval(() => {
//     this.seconds++;
//     console.log(this.seconds);
//   }, 1000);
// }
// Using a regular function inside setInterval would not work the same, because this would refer to the global object or be undefined.

// 2. No arguments Object
// Arrow functions do not have their own arguments object.

// const showArgs = () => {
//   console.log(arguments); // ❌ ReferenceError
// };

// If you need arguments, use a regular function or rest parameters:

// const showArgs = (...args) => {
//   console.log(args); // ✅ works
// };

// 3. Cannot be used as Constructors
// You can't use arrow functions with new.

// const Person = (name) => {
//   this.name = name;
// };

// const p = new Person("Alice"); // ❌ TypeError
// ⚡️When to Use Arrow Functions:
// Short callbacks (like map, filter, forEach)

// Keeping lexical this in closures

// Functional programming style

// ⚠️ When Not to Use:
// When you need this to refer to the calling object

// When using as constructors

// When needing the arguments object

// Arrow Functions: What not to do!!!
// Dont use arrow functions for:
// 1. Object Methods
// 2. Prototypes
// 3. Event Handlers
// 4. Constructors

// Theory End -------------

// Arrow Functions End -------------------------