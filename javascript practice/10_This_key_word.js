let person = {
  firstname: "kalpesh",
  lastname: "chavada",
  sayhello() {
    console.log(
      "my name is " +
        this.firstname +
        " " +
        this.lastname +
        " and i have " +
        car.carname +
        " " +
        car.catagory
    );
  },
};

let car = {
  carname: "Maruti",
  catagory: "petrol",
};

person.sayhello();
