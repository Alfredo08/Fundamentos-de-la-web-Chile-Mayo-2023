
let contador = 0;

function mensaje( nombre ){
    console.log( "Hola", nombre );
    console.log( "Estás a punto de cerrar sesión" );
    alert( "Hola " + nombre + " estás a punto de cerrar sesión" );
}

function agregarAContador(){
    contador ++;
    console.log( contador );
}

function mostrarPerfil( elemento ){
    elemento.style.color = "blue";
}

function ocultarPerfil( element ){
    element.style.color = "white";
}