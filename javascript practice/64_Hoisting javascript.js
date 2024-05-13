// Hoisting in javascript is the default process behavior of moving declaration of all the variables and functions on top of the scope where scope can be either local or global.

// Example 1:

hoistedFunction(); // " Hi There! " is an output that is declared as function even after it is called

function hoistedFunction() {
  console.log(" Hi There! ");
}

// Example 2:

hoistedVariable = 5;

console.log(hoistedVariable); // outputs 5 though the variable is declared after it is initialized

var hoistedVariable;
