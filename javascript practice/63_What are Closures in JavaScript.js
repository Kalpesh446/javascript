//Closures provide a better, and concise way of writing JavaScript code for the developers //and programmers. Closures are created whenever a variable that is defined outside the //current scope is accessed within the current scope.

function hello(name) {
  var message = "hello " + name;

  return function hello() {
    console.log(message);
  };
}

//generate closure

var helloWorld = hello("World");

//use closure

helloWorld();
