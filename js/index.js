// Your code goes here
const navLinks = document.querySelectorAll(".nav a").forEach(element => {
    element.addEventListener("mouseover", () => {
        element.style.color = "red"
    })
})
