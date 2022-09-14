// script compuesto de 4 variables y 2 funciones
let menu = document.getElementById("menu");
let main1 = document.getElementById("main1");
let desplegable = document.getElementById("contdesplegable");
let content = document.getElementById("content");
desplegable.style.display = "none";
// esta sirve para desplegar o mejor dicho ahcer visible un elemento desactivado de dentro del main
const desplegar = () => {
    content.style.display = "none";
    desplegable.style.display = "flex";
}

menu.addEventListener("click", desplegar);
// esta duncion sirve para volver a desactivar el elemento oculto del main
const cerrar = (event) => {
    if (event.target.id == "cerrarmenu") {
        content.style.display = "block";
        desplegable.style.display = "none";
    }
}
main1.addEventListener("click", cerrar);