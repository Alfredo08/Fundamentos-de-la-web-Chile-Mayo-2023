function agregarLike( elemento ){
    // console.log( elemento.querySelector( ".numLikes" ) );
    // console.log( elemento.closest( ".extra" ) );
    let spanNumLikes = elemento.querySelector( ".numLikes" );
    numLikes = Number( spanNumLikes.textContent );
    numLikes += 1;
    spanNumLikes.textContent = numLikes;
}

function agregaHTML( elemento ){
    let contenedor = document.querySelector( ".flex-2" );
    contenedor.innerHTML += `
        <div class="box definition">
            <div class="left">
                <h1 class="blueText">ninja</h1>
                <p><em>noun</em></p>
                <p>Plural: <em>ninjas</em></p>
                <button class="btn like" onclick="agregarLike(this)">
                    <span class="numLikes">0</span> likes
                </button>
            </div>
            <p class="definition-text">A practitioner skilled in the <a href="#">Japanese</a> art of <a href="#">ninjutsu</a></p>
        </div>
        `;
}

function removerCookie( elemento ){
    elemento.closest( ".box" ).remove();
}

function ocultarElemento( elemento ){
    elemento.closest( ".box" ).classList.add( "ocultar" ); // .remove( "ocultar" )
}

function seleccionarPais( elemento ){
    let modal = document.querySelector( ".modal" );
    modal.classList.remove( "ocultar" );
    let contenedor = document.querySelector( ".container" );
    contenedor.classList.add( "opacidad" );
    let tituloModal = document.querySelector( ".titulo" )
    tituloModal.textContent = "Pais";
    let contenidoModal = document.querySelector( ".contenido" );
    contenidoModal.textContent = elemento.value;
}

function desplegarTexto( elemento ){
    console.log( elemento.value );
}

function intentoDeLogin( elemento ){
    console.log( "Inicio" );
    setTimeout( mostrarMensajeDeLogin, 5000 );
    console.log( "Final" );
}

function mostrarMensajeDeLogin(){
    let busqueda = document.querySelector( ".search" );
    let modal = document.querySelector( ".modal" );
    modal.classList.remove( "ocultar" );
    let contenedor = document.querySelector( ".container" );
    contenedor.classList.add( "opacidad" );
    let tituloModal = document.querySelector( ".titulo" )
    tituloModal.textContent = "Login";
    let contenidoModal = document.querySelector( ".contenido" );
    contenidoModal.textContent = "Bienvenid@ de vuelta. Tu búsqueda es: " + busqueda.value;
    console.log( "Mensaje" );
}

function cerrarModal( element ){
    let modal = document.querySelector( ".modal" );
    modal.classList.add( "ocultar" );
    let contenedor = document.querySelector( ".container" );
    contenedor.classList.remove( "opacidad" );
}