// filter function
let arr = [2, 4, 22, 10, 40, 25, 67];
// > 10

let filterArr = arr.filter((val) => val > 10);
console.log(filterArr);

// let filterArr = arr.filter(function (val) {
//   return val > 10;
// });
// console.log(filterArr);

// other example of filter

let emp = [
  {
    name: "kalpesh",
    position: "devloper",
  },
  {
    name: "rajesh",
    position: "backend",
  },
  {
    name: "rahul",
    position: "ceo",
  },
  {
    name: "chirag",
    position: "devloper",
  },
  {
    name: "jagdish",
    position: "frontend",
  },
  {
    name: "pragnesh",
    position: "devloper",
  },
];

let devloper = emp.filter((val) => val.position == "devloper");
console.log(devloper);
