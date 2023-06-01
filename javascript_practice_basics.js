// ** Lesson 1: Variables **

// Use 'let' to declare a variable
// Variable structure:
// // let [variable] = [value];

// By default, variables are undefined.
// Variable names can't be reserved keywords
// Cannot start with a number
// Cannot contain space or hyphen
// Case sensitive
// You do not have to use 'let' to change a variable value

// ** Lesson 2: Constants **

let interestRate = 0.3;
interestRate = 1;

// In the above example, interestRate will be overwritten with the new
// value of 1.
// If you want to fix a value, use a const value as follows:

const interestRate = 0.3;
interestRate = 1;

// The above example will error in the console
// You cannot change a const value once assigned
// Will be a TypeError

// ** Lesson 3: Primitive Types  **
// What are the types of values that we can assign to variables?
// Primitive (value) and reference types.

// Primitive types:
// - Strings
// - Number
// - Boolean
// - undefined
// - null

// ** Lesson 4: Dynamic Typing **

// Dynamic vs static languages
// Static: variable types are set and cannot be changed
// Dynamic: variable types can change
// Difference between int and float doesn't exist in JS

// ** Lesson 5: Objects **

// Reference types:
// - Object
// - Array
// - Function

// Object - an entity with associated values and variables

// Defining an object:

let person = {
  name : 'Me',
  age : 30
};

console.log(person); //-> {name: 'Me', age: 30}

// Referencing or changing object values:
// // Dot notation:
person.name = 'AnotherMe';

// // Bracket notation:
person['name'] = 'AnotherMe';

//  ** Lesson 6: Arrays  **
let selectedColors = ['blue', 'red', 'green'];

// Arrays are also mutable in JS

// ** Lesson 7: Functions **

function greet(myname) {
  console.log('Hello' + myname);
}

let name = 'John';

greet(myname);

// If you use a parameter in a function and do not pass in an argument,
// the default value within the function will be 'undefined' (rather than
// an error message)

// ** Lesson 8: Types of Function

// Performing a task
function greet(myname) {
  console.log('Hello' + myname);
}

// Calculating a value
function square(number) {
  return number * number;
}
