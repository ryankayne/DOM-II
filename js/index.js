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

const footerChange = document.querySelector("footer");
window.addEventListener("resize", () => {
    footerChange.style.background = "purple"
})

footerChange.addEventListener('copy', (event) => {
    event.footer.style.background = "pink";
})

const blackout = document.querySelector("body");
document.addEventListener("keydown", (event) => {
    blackout.style.background = "black";
    
})

document.addEventListener("keypress", event => {
    if (event.isComposing || event.keyCode === 32) {
      return;
    }
    blackout.style.background = "white";
    console.log('stopped propagation');
    event.stopPropagation();
  });



  const stopLink = document.querySelector(".nav-link");
stopLink.addEventListener("click", (event) => {
  console.log('stopped the link');
  event.preventDefault();
})
   