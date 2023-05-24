
let libro = {
    titulo : "El principito",
    paginas : 320,
    capitulos : 20,
    idioma : "Español",
    autores : ["Antoine de Saint", "Miguel de Cervantes"],
    reseñas : {
        uno : "Dato 1",
        dos : "Dato 2"
    }
};

console.log( libro );
console.log( libro.autores );

libro.autores.pop();

console.log( libro );

console.log( libro.reseñas.dos );