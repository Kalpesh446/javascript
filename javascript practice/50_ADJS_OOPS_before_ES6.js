// construction function so easy to create object without copy of properties

function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;

  this.sayhi = function () {
    alert("hi");
  };

  this.changeage = function (newage) {
    this.age = newage;
  };
}

let person1 = new Person("hiren", "bhamroliya", 25);
person1.changeage(40);
let person2 = new Person("rahul", "chavada", 30);

console.log(person1);
console.log(person2);

// 1st way to new object
let people = {
  firstName: "kalpesh",
  lastName: "chavada",
  age: 24,

  comBine: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

let people2 = {
  firstName: "ajit",
  lastName: "kumar",
  age: 30,

  comBine: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

people.age = 30;
console.log(people.age);
people.comBine();

// 2nd way to new object

// let car = {};

// 3rd way to new object new keyword
let car = new Object();
car.name = "Honda city";
car.brand = "branded";
car.stock = 40;

console.log(car);
