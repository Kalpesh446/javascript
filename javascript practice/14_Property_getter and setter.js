let person = {
  name: "kalpesh",
  age: 24,

  set setname(n) {
    this.name = n.toUpperCase();
  },
};

person.setname = "kakakka";
console.log(person);
