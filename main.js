// dragstart
// dragend
// drag
// dragenter
// dragleave
// dragover 
// drop


const box = document.querySelector(".div");
const p = document.querySelector(".text");

p.addEventListener("dragstart", function (e) {
  e.dataTransfer.setData("Text", e.target.className);
});

box.addEventListener("dragover", function (e) {
  e.preventDefault();
});

box.addEventListener("drop", function (e) {
  let id = e.dataTransfer.getData("Text");
  box.appendChild(document.getElementsByClassName(id)[0]);
  e.preventDefault();
});

box.addEventListener("dragend", function (e) {
  e.target.style.fontSize = "20px";
});