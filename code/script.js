// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
// 

function toggle() {
  this.classList.toggle("active")
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("question-1").onclick = toggle

document.getElementById("question-2").onclick = toggle

document.getElementById("question-3").onclick = toggle

document.getElementById("question-4").onclick = toggle

// // Vans code: open one at a time and close when another is opened
// const accordionHeader1 = document.getElementById('question-1');

// const accordionHeader1 = document.getElementById('question-2');

// const accordionHeader1 = document.getElementById('question-3');

// const accordionHeader1 = document.getElementById('question-4');

// accordionHeader1.add

// document.getElementById("question-1").onclick = toggle {
//   this.classList.remove()
// }