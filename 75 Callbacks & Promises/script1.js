


// In JavaScript, a Promise is used to handle asynchronous operations. The basic syntax for creating a promise is as follows:


let promise = new Promise(function(resolve, reject) {
    // asynchronous operation
    if (/* operation successful */) {
        resolve(value);  // success case
    } else {
        reject(error);   // failure case
    }
});


// Example:

let myPromise = new Promise(function(resolve, reject) {
    let success = true; // Simulating an operation outcome

    if (success) {
        resolve("Operation was successful!");
    } else {
        reject("Operation failed.");
    }
});


// Using the promise:

myPromise
  .then(function(result) {
    console.log(result); // Handles the success case
  })
  .catch(function(error) {
    console.error(error); // Handles the failure case
  });