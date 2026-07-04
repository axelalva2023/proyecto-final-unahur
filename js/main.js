//Obtengo los elementos del dom:

const titulo = document.getElementById("titulo");
let i = 0
let frase = "Bienvenidos"

const nav = document.querySelector("#nav")
const abrir = document.querySelector("#abrir")
const cerrar = document.querySelector("#cerrar")
const hero = document.getElementById("hero")

const fondos = ["hero.jpg", "hero2.jpg", "hero3.jpg", "hero4.jpg", "hero5.jpg"]

function cambiarFondo(arr) {
    let random = Math.floor(Math.random() * arr.length)
    hero.style.backgroundImage = `url(./img/${arr[random]})`
}


setInterval(()=>{
    if (i < frase.length) {
        titulo.textContent += frase[i]
        i++
    } else {
        titulo.textContent = ""
        i = 0
    }
}, 200)

abrir.addEventListener("click", () =>{
    nav.classList.add("visible")
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible")
})

window.addEventListener("DOMContentLoaded", (e) =>{
    e.preventDefault()
    cambiarFondo(fondos)
})