let arrObj = [
  {
    name: "kalpesh",
    age: 13,
  },
  {
    name: "nilesh",
    age: 20,
  },
  {
    name: "kajal",
    age: 25,
  },
  {
    name: "mohan",
    age: 30,
  },
  {
    name: "lalji",
    age: 25,
  },
  {
    name: "jenti",
    age: 58,
  },
  {
    name: "prakash",
    age: 40,
  },
];

// filter method return value of every array element
let filteredArr = arrObj.filter((item) => {
  return item.age > 20;
});

console.log(filteredArr);

// find method return single first element in array
let findArr = arrObj.find((item) => {
  return item.age > 20;
});

console.log(findArr);
