let books = ["math", "gujrati", "bio", "social"];

// for (i = 0; i < books.length; i++) {
//   console.log(`element ${i} is ${books[i]} \n`);
// }

// for each
// fat arrow function
// books.forEach((Element) => {
//   console.log(Element);
// });

// normal function
books.forEach(myFun);
function myFun(value) {
  console.log(value);
}
