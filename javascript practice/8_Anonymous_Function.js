// anonymous function

// its call not function name it anonymous function
let names = "hello third";

let name = function () {
  console.log("hello !!!");
};

name();

// it is use like anonymous function
setTimeout(function () {
  console.log("hello !!!");
}, 3000);

(function () {
  console.log(names);
})();
