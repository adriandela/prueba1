// en este script se ha creado un array el cual va a ser utilizado en las funciones que lo componen, este array posee la ruta de unas imagenes
const imagenes = ["assets/imagenes/carrusel1.jpg", "assets/imagenes/carrusel2.jpg", "assets/imagenes/carrusel3.jpg"];
let main2 = document.getElementById("main1");
let visor = document.getElementById("visor");
let contador = 0;
// evento mover que se compone de dos flechas una avanza hacia la posicion anterior del array y otra hacia la posterior y se pasa la ruta al src del visor
const mover = (event) =>{
        if (event.target.id == "flechaizquierda") {
            contador = contador -1;
            if (contador < 0) {
                contador = 2;
            }
            visor.src = imagenes[contador];
        }
        if (event.target.id == "flechaderecha") {
            contador = contador +1;
            if (contador > 2) {
                contador = 0;
            }
            visor.src = imagenes[contador];
        }
}
main1.addEventListener("click", mover);
// funcion automatica la cual es un intervalo es decir se ejecutara cada 5 segundos y lo que hace es aumentar la posicion del array en 1 y lo pasa al src del visor

girar = () =>{
    contador = contador +1;
            if (contador > 2) {
                contador = 0;
            }
            visor.src = imagenes[contador];
}
setInterval(girar,5000);