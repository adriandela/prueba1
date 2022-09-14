// este script tiene 5 variables declaradas las cuales se utilizaran para poner las propiedades de los select en el visor y crear la tarjeta
let fuente1 = document.getElementById("fuente");
let colores = document.getElementById("colores");
let fondos = document.getElementById("contimgfondos");
let mensaje = document.getElementById("mensaje");
let visualizar = document.getElementById("visor");
const cambiofuente = (event) => {
    mensaje.style.fontFamily = event.target.value;
}
fuente1.addEventListener("change", cambiofuente);
const cambiocolor = (event) => {
    mensaje.style.color = event.target.value;
}
const cambiofondo = (event) => {
    if (event.target.tagName == "IMG") {
        visualizar.style.backgroundImage = "url('" + event.target.src + "')"
    }
}
fondos.addEventListener("click", cambiofondo);
colores.addEventListener("change", cambiocolor);
fuente1.addEventListener("change", cambiofuente);
