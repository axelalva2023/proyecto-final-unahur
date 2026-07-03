//Obtengo los elementos del dom:

const titulo = document.getElementById("titulo");
let i = 0
let frase = "Bienvenidos a Bogui"

setInterval(()=>{
    if (i < frase.length) {
        titulo.textContent += frase[i]
        i++
    } else {
        titulo.textContent = ""
        i = 0
    }
}, 200)