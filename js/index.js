// Your code goes here
const navLinks = document.querySelectorAll(".nav a").forEach(element => {
    element.addEventListener("mouseover", () => {
        element.style.color = "red"
    })
})

document.querySelectorAll(".nav a").forEach(element => {
    element.addEventListener ("click", () => {
        element.style.background = "blue"
    })
})

const title = document.querySelector(".logo-heading");

title.addEventListener("dblclick", () => {
    title.style.transform = "scale(1.4)";
    title.style.transition = "all 0.5s";
})

const logo = document.querySelector("h1");
logo.addEventListener("mouseenter", () => {
    logo.style.transform = "scale(1)";
})

const funBusBig = document.querySelector('.intro img');

funBusBig.addEventListener("mousedown", () => {
    funBusBig.style.transform = "scale(1.5)";
})

funBusBig.addEventListener("mouseup", () => {
    funBusBig.style.transform = "scale(1)";
})

const resize = document.querySelector("footer");
window.addEventListener("resize", () => {
    resize.style.background = "purple"
})

const blackout = document.querySelector("body");
document.addEventListener("keydown", () => {
    blackout.style.background = "black"
})

document.addEventListener("keypress", event => {
    if (event.isComposing || event.keyCode === 32) {
      return;
    }
    blackout.style.background = "white"
  });

   