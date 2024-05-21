// interview question

// what is output are in this console.log

function logAndTimeouts() {
  console.log("kalpesh");
  console.log(
    setTimeout(() => {
      console.log("heelo");
    }, 200)
  );
  console.log(
    setTimeout(() => {
      console.log("world");
    }, 0)
  );
  console.log("yes");
}

// Call the function
logAndTimeouts();
