
// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

let button = document.getElementById("btn")
button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!"
})

button.addEventListener("click", ()=>{
    alert("Dont hack us by Right click Please")
})

// document.addEventListener("keydown", (e)=>{
//     console.log(e, e.key, e.keyCode)
// })