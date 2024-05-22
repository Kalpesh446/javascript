// interview question

// what is output are in this console.log

function logAndTimeouts() {
  console.log("kalpesh"); //1
  console.log(
    setTimeout(() => {
      console.log("heelo");
    }, 200) // 4
  );
  console.log(
    setTimeout(() => {
      console.log("world");
    }, 0) // 3
  );
  console.log("yes"); // 2
}

// Call the function
logAndTimeouts();

console.log(3 + "3"); // 33
console.log(3 - "3"); // 0
