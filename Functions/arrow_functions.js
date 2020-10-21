/**
 * Arrow Function is the concept of ES6.
 * An alternatice way to write a shorter syntax compared to the function or function expressions.
 */

//  function addition(a, b) {

//     return a + b;

//  }

//  console.log(addition(100,200))

//  add = function addition(a, b) {
//      return a + b;
//  }

//  console.log(add(100, 200));

// var sayHello = () => console.log("Hello Everyone")

// sayHello();

// var sayHelloWithMessage = () => {
//     console.log("Hello Everyone")
//     console.log("Lets learn interesting facts about JS!")
// }

// sayHelloWithMessage();

// var add = (num1, num2) => {return num1 + num2}

// console.log(add(100,200))

let numbers = [4,2,6];
numbers.sort((a,b) => b - a);
console.log(numbers)
