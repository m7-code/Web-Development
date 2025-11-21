// Use querySelectorAll to select all elements with the class "box"
let boxes = document.querySelectorAll(".box"); // Correct selector

function randomcolor() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1},${val2},${val3})`; // Remove space before parenthesis
}

// Convert the NodeList to an array and iterate over each box
Array.from(boxes).forEach(e => {
    e.style.backgroundColor = randomcolor(); // Set random background color
});
