// JavaScript Promises to simplify managing multiple asynchronous operations, preventing callback hell and unmanageable code. They represent future values, associating handlers with eventual success or failure, resembling synchronous methods by postponing value delivery until later.

// syntax
// let promise = new Promise(function (resolve, reject) {
//   //do something
// });

// Parameters

// The promise constructor takes only one argument which is a callback function
// The callback function takes two arguments, resolve and reject
// Perform operations inside the callback function and if everything went well then call resolve.
// If desired operations do not go well then call reject.

// fulfilled: Action related to the promise succeeded
// rejected: Action related to the promise failed
// pending: Promise is still pending i.e. not fulfilled or rejected yet
// settled: Promise has been fulfilled or rejected

// Example:

let promise = new Promise(function (resolve, reject) {
  const x = "Kalpesh";
  const y = "Kalpesh";
  if (x === y) {
    resolve();
  } else {
    reject();
  }
});

promise
  .then(function () {
    console.log("Success, You are a Kalpesh");
  })
  .catch(function () {
    console.log("Some error has occurred");
  });
