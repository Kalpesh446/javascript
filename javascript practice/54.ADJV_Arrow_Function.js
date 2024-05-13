// Normal Function

function sum(a, b) {
  return a + b;
}

// Arrow Function
// if 1 line fun code no need to write {}
let sumA = (a, b) => a + b;
console.log(sum(2, 3));
console.log(sumA(2, 3));

// normal function
function multi(a) {
  return a * 2;
}

// arrow function
let multi1 = (a) => a * 2;
console.log(multi(10));
console.log(multi1(10));

// random normal fun
function random() {
  return Math.random();
}

// arrow random fun
let random1 = () => Math.random();
console.log(random1());

//normal annoneys fun
document.addEventListener("click", function () {
  console.log("clicked");
});

// arrow fun
document.addEventListener("click", () => console.log("clicked"));
