// Factory-Func Start ----------------------------

// Theory Start -------------
// What is a Factory Function?
// A factory function is just a regular function that creates and returns an object.

// It’s called a "factory" because it produces objects, just like a real-world factory produces products.

// Basic Example:

// function createPerson(name, age) {
//     return {
//         name,
//         age,
//         greet() {
//             return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
//         }
//     };
// }

// const person1 = createPerson("Alice", 30);
// console.log(person1.greet()); // Hi, I'm Alice and I'm 30 years old.

// ### Why Use Factory Functions? ------------
// Here’s why developers love factory functions:


// Benefit	Description
// ✔️ No new keyword	Unlike constructors or classes, you don’t need new to create an object.
// ✔️ Cleaner syntax	No weird this behavior unless you want it.
// ✔️ Private variables	You can use closures to hide data (unlike class or constructor).
// ✔️ Flexible	Can return anything (objects, functions, other factories).
// ✔️ Easy to compose	Combine multiple factory functions together (great for modular code).

// 🔒 Factory Functions + Encapsulation (Closures)
// You can hide private variables using closures — something you can’t do as easily with class.

// function createCounter() {
//     let count = 0; // private

//     return {
//         increment() {
//             count++;
//             return count;
//         },
//         decrement() {
//             count--;
//             return count;
//         },
//         getCount() {
//             return count;
//         }
//     };
// }

// const counter = createCounter();
// console.log(counter.increment()); // 1
// console.log(counter.increment()); // 2
// console.log(counter.getCount());  // 2
// Here, count is not accessible from outside — it’s private. Only the returned methods can access it. 🔐

// ⚠️ Factory Function vs Constructor Function vs Class

// Feature	                   Factory Function	         Constructor Function	       Class

// Requires new?	                  ❌ No	                 ✅ Yes	                ✅ Yes
// Can have private vars?	    ✅ Yes (via closure)	     ❌ No (unless using hacks)	✅ Yes (# syntax)
// Syntax simplicity	        ✅ Very simple	                😐 Older style	     ✅ Modern & readable
// Shared methods?	            ❌ Not shared by default	    ✅ via prototype	        ✅ via prototype

// 🧪 Bonus: Factory with Shared Behavior (Composition) ------------------
// You can compose multiple behaviors together:

// javascript
// Copy
// Edit
// const talker = (name) => ({
//     talk: () => `${name} is talking`
// });

// const walker = (name) => ({
//     walk: () => `${name} is walking`
// });

// function createPerson(name) {
//     return {
//         name,
//         ...talker(name),
//         ...walker(name)
//     };
// }

// const joe = createPerson("Joe");
// console.log(joe.talk()); // Joe is talking
// console.log(joe.walk()); // Joe is walking
// This is powerful when you want to build modular, reusable code without worrying about class hierarchies.

// 🧠 Summary --------------------------
// A factory function is a function that returns a new object.

// It’s an alternative to class or constructor for object creation.

// It allows encapsulation, simplicity, and modular design.

// Great for when you don't need inheritance or want functional-style flexibility.

// Theory End -------------

// Factory-Func End ----------------------------