// in ES6 introduce class

// class people {
//   // when object created automatically called construction funtion not manually called
//   constructor(first, last, age) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//   }

//   sayhi() {
//     console.log("hi....");
//   }
//   static sproperty = "something";

//   static hello() {
//     console.log("static hello");
//   }
// }
// let person1 = new people("kalpesh", "chavada", 39);
// // console.log(person1);
// // when static function call from only class through
// console.log(people.sproperty);
// people.hello();
// person1.sayhi();

// // class inheritance

// class emp {
//   constructor(n) {
//     this.name = n;
//     console.log("em con call");
//   }
//   msg() {
//     console.log("hello...");
//   }
// }

// class manager extends emp {
//   constructor(n, p) {
//     super(n);
//     this.department = p;
//   }
//   msg() {
//     console.log("hello from manager");
//   }
//   info() {
//     // parent class method call
//     super.msg();
//     // this.msg() own class call
//     console.log(this.name + " is manager of department " + this.department);
//   }
// }

// // multiple inheritance class

// class admin extends manager {}

// let admin1 = new admin("kalpesh", "web devloper");
// console.log(admin1);

// private property and method #before name or method which only access in class not outside
class emp {
  #name = "";
  constructor(n) {
    this.#name = n;
  }
  //   private method
  #getname() {
    console.log(this.#name);
  }
  setname() {
    this.#getname();
  }
}

let emp1 = new emp("kalpesh");
console.log(emp1.setname());

// Mixin :- object and class mixing

let usermethod = {
  sayhi() {
    console.log("hello...");
  },
  sayby() {
    console.log("bye...");
  },
};
let usermethod2 = {
  sayhi1() {
    console.log("hello...");
  },
  sayby2() {
    console.log("bye...");
  },
};
class user {
  constructor() {
    this.Name = "kalpesh";
  }
}
class admin extends user {}

Object.assign(admin.prototype, usermethod);
Object.assign(admin.prototype, usermethod2);

let admin1 = new admin();
console.log(admin1);
