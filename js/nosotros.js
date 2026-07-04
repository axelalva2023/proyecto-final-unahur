const nav = document.querySelector("#nav")
const abrir = document.querySelector("#abrir")
const cerrar = document.querySelector("#cerrar")
const imgPizza = document.getElementById("imgPizza")
const imgHambu = document.getElementById("imgHambu")
const imgPancho = document.getElementById("imgPancho")

abrir.addEventListener("click", () =>{
    nav.classList.add("visible")
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible")
})

imgPizza.addEventListener("mouseenter", () => {
    imgPizza.src = "../img/pesos.jpg"
})

imgPizza.addEventListener("mouseleave", () => {
    imgPizza.src = "../img/pizza.jpg"
})

imgHambu.addEventListener("mouseenter", () => {
    imgHambu.src = "../img/pesos.jpg"
})

imgHambu.addEventListener("mouseleave", () => {
    imgHambu.src = "../img/hambu.jpg"
})

imgPancho.addEventListener("mouseenter", () => {
    imgPancho.src = "../img/pesos.jpg"
})

imgPancho.addEventListener("mouseleave", () => {
    imgPancho.src = "../img/pancho.jpg"
})


