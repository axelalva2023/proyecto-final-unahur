//Obtengo elementos del dom:

const nombre = document.getElementById("inputNombre");
const stock = document.getElementById("inputStock");
const correo = document.getElementById("inputCorreo");
const titulo = document.getElementById("tituloFormulario")
const select = document.getElementById("select")
const spanNombre = document.getElementById("spanNombre")
const spanStock = document.getElementById("spanStock")
const spanCorreo = document.getElementById("spanCorreo")
const formulario = document.getElementById("formulario")
const nav = document.querySelector("#nav")
const abrir = document.querySelector("#abrir")
const cerrar = document.querySelector("#cerrar")

//Creamos funciones:

function validacion() {
     let esValido = true

     spanNombre.textContent = "";
    spanStock.textContent = "";
    spanCorreo.textContent = "";

    if(nombre.value.trim() == "" ){
        spanNombre.textContent = "Ingrese un nombre valido"
        esValido = false
    }
    if(stock.value.trim() == ""){
        spanStock.textContent = "Ingrese una stock valido"
        esValido = false
    }
    if(Number(stock.value) < 100){
        spanStock.textContent = "Ingrese un stock superior a los 100"
        esValido = false
    }
    if(correo.value.trim() == ""){
        spanCorreo.textContent = "Ingrese un correo valido"
        esValido = false;
    }
   
    return esValido;
    
}

function cambiarColor() {
    if(select.value == "verduleria"){
        titulo.style.color = "green"
    }
    if(select.value == "electronica"){
        titulo.style.color = "blue"
    }
    if(select.value == "bebidas"){
        titulo.style.color = "red"
    }
}

//Agregamos eventos:

formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    if(validacion()){
        alert("Productos registrados correctamente")
        nombre.value = ""
        stock.value = ""
        correo.value = ""
        nombre.focus()
    }
})

select.addEventListener("change", () => {
    cambiarColor()
    nombre.focus()
})

abrir.addEventListener("click", () =>{
    nav.classList.add("visible")
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible")
})

