// let person = {};

// console.log(person);

// let person1 = {
//   Name: "klapesh",
// };

// console.log(person1.hasOwnProperty("age"));
function Creature(life) {
  this.lifeOfCre = life;
}

let creature1 = new Creature(200);

Creature.prototype.brething = function () {
  console.log("breathing");
};

console.log(creature1);

function Person(name, last, age) {
  this.firstName = name;
  this.lastName = last;
  this.age = age;
  // this is DRY rule out
  // this.fullName = function () {
  //   console.log(this.Name + " " + this.lastName);
  // };
}
// so prototype is not copy consept thts why in commen function in create in prototype
Person.prototype.fullName = function () {
  console.log(this.firstName + " " + this.lastName);
};

Person.prototype.__proto__ = Object.create(Creature.prototype);

let people = new Person("kalpesh", "chavada", 24);
let people1 = new Person("alpesh", "jemin", 14);

console.log(people.brething());
console.log(people.fullName());
console.log(people1);
