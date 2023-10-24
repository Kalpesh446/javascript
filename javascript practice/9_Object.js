// create Object
let person = {
  firstname: "kalpesh",
  lastname: "chavada",
  // sayhello: function () {
  //   console.log("hello World ");
  // }, anonyis function

  // sayhello() {
  //   console.log("hello World!!!!");
  // },   ES 6 version
};

person.age = "29";
// for (const key in person) {
//   console.log(key + ":" + person[key]);
// }

// there is 4 method to object are action/work

// first method anonymous function
// person.sayhello = function () {
//   console.log("Hello World !!!");
// };

// second method normal function
// function geet() {
//   console.log("Hello World!!!!!!");
// }

// person.sayhello = geet;

person.sayhello();
