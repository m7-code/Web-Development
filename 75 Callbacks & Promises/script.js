// Here is the syntax for both a simple function and a callback function in JavaScript:

                                // 1. Simple Function
                                
// A simple function in JavaScript is defined using the function keyword or an arrow function.



function simpleFunction() {
    console.log("This is a simple function");
}



// Function Expression (Optional):

const simpleFunction = function() {
    console.log("This is a simple function");
};


// Arrow Function (Optional):

const simpleFunction = () => {
    console.log("This is a simple function");
};
                                   // 2. Callback Function

// A callback function is a function passed into another function as an argument and is executed after some operation.

// Example of a Callback Function:

function greeting(name) {
    console.log(`Hello, ${name}`);
}

function processUserInput(callback) {
    const name = "John";
    callback(name);  // Here, `callback` is called
}

// Using the callback function
// processUserInput(greeting);
// In this example:

// greeting is a callback function passed to processUserInput.
// processUserInput receives the function greeting as an argument and calls it with the value "John".
// Arrow Function as Callback:

function processUserInput(callback) {
    const name = "John";
    callback(name);
}

// Using an arrow function as a callback
processUserInput((name) => {
    console.log(`Hello, ${name}`);
});







