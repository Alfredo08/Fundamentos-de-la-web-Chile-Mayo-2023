
async function obtenerImagenes( event ){
    event.preventDefault();

    let numeroImagenes = document.querySelector( "#numeroDeImagenes" ).value;
    
    // URL
    let url = `https://dog.ceo/api/breeds/image/random/${numeroImagenes}`;
    //let url = "https://dog.ceo/api/breeds/image/random/" + numeroImagenes;
    // Objeto de configuracion
    let config = {
        method : 'GET'
    };

    // Peticion
    let response = await fetch( url, config );
    // Respuesta
    let info = await response.json();

    let resultados = document.querySelector( ".resultados" );
    resultados.innerHTML = "";

    /*for( let i = 0; i < info.message.length; i ++ ){
        console.log( info.message[i] );
        resultados.innerHTML += `
            <div class="imagen">
                <img src="${info.message[i]}" alt="Imagen de un perro" >
            </div>
        `;
    }*/

    info.message.forEach( (urlImagen) => {
        resultados.innerHTML += `
            <div class="imagen"> 
                <img src="${urlImagen}" alt="Imagen de un perro" >
            </div>
        `;
    });

}