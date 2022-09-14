// compuesto por solo dos variables lo que hace este script con una funcion es diferenciar con los if entre los id de los elementos para crear mensajes segun se pulsen botones
let registro = document.getElementById("registro");
let main2 = document.getElementById("main1");
const registrarse = (event) => {
    if (event.target.id == "registro") {
        main2.innerHTML = '<div id="mensaje" class="contmensaje"><div class="terminosycondiciones"><h1>ANTES DE CONTINUAR</h1><div class="marcar"><p>Acepte los términos y condiciones</p><input type="checkbox" name="aceptar" id=""></div> <input class="continuar" id="continuar" type="submit" value="Continuar"></div></div>' + main2.innerHTML;
    }
    // esta variable es necesario que se cree aqui para poder ser utilizada ya que es un elemento que se crea en el paso anterior
    let mensaje = document.getElementById("mensaje");
    if (event.target.id == "continuar") {
        mensaje.innerHTML = '<div class="contmensaje"><div id="mensaje" class="terminosycondiciones"><div><p class="felicidades">FELICIDADES TE HAS REGISTRADO<p></div><a class="enlacepprinc" href="../index.html"><p>Ir a la Página principal</p></a><div></div></div></div>'
    }
}
main2.addEventListener("click", registrarse);