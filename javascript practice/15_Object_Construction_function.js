// let student1 = {
//   Firstname: "kalpesh",
//   LastName: "chavada",
//   age: 23,
//   class: 5,
// };

// let student2 = {
//   Firstname: "ajit",
//   LastName: "lali",
//   age: 27,
//   class: 2,
// };

// object Construction function

function Student(first, last, age, cls) {
  (this.firstName = first),
    (this.lastName = last),
    (this.age = age),
    (this.class = cls);
}

Student.prototype.school = "saraswati ";

let student1 = new Student("kalpesh", "chavada", 24, 5);
// student1.nationality = "Indian";
// student1.name = function () {
//   return this.firstName + " " + this.lastName;
// };

// let student2 = new Student("alla", "ana", 14, 8);

console.log(student1.school);
