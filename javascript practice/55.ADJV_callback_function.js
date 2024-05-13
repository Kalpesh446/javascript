// callback function
function sayhello() {
  console.log("hello");
}

function sayhi() {
  console.log("hi");
}

let a = 20;
let b = 30;
function sum(num1, num2, callback) {
  console.log(num1 + num2);
  callback();
}

sum(a, b, sayhello);
sum(50, 100, sayhi);
sum(50, 100, function () {
  console.log("bye");
});
