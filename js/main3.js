// este script se compone de 3 variables declaradas una de ellas un array y un evento cambio que sirve para mostrar los mensajes en cada una de los elementos de la pagina en cuestion
let main3 = document.getElementById("main1");
let articulo = document.getElementById("articulo");
let art = document.getElementsByTagName("ARTICLE");
const cambio = (event) => {

    if (event.target.className == "art") {

        console.log("hola")
        if (event.target == art[0]) {
            event.target.innerHTML = '<div class="comentario"><h2>Nuestos Artículos:</h2><ul><li>Calidad</li><li>Naturales</li></ul></div>' + art[0].innerHTML;
        }
        if (event.target == art[1]) {
            art[1].innerHTML = '<div class="comentario"><h2>Politica de Cobro:</h2><ul><li>Seguridad</li><li>Compromiso</li></ul></div>' + art[1].innerHTML;
        }
        if (event.target == art[2]) {
            art[2].innerHTML = '<div class="comentario"><h2>Politica de Envios:</h2><ul><li>Confianza</li><li>Fiable</li></ul></div>' + art[2].innerHTML;
        }
        if (event.target == art[3]) {
            art[3].innerHTML = '<div class="comentario"><h2>Devolución de Artículos:</h2><ul><li>Viable</li><li>Tranquilidad</li></ul></div>' + art[3].innerHTML;
        }
        if (event.target == art[4]) {
            art[4].innerHTML = '<div class="comentario"><h2>Mejora tu Boda:</h2><ul><li>Romántico</li><li>Bonito</li></ul></div>' + art[4].innerHTML;
        }
        if (event.target == art[5]) {
            art[5].innerHTML = '<div class="comentario"><h2>Política de Datos:</h2><ul><li>Bloqueo</li><li>Confianza</li></ul></div>' + art[5].innerHTML;
        }
    }

}
articulo.addEventListener("mouseover", cambio);