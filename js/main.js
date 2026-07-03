//Obtengo los elementos del dom:

const titulo = document.getElementById("titulo");
let i = 0
let frase = "Bienvenidos"

const nav = document.querySelector("#nav")
const abrir = document.querySelector("#abrir")
const cerrar = document.querySelector("#cerrar")


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