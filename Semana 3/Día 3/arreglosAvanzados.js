
let nombres = ['Alex', 'Martha', 'Roger', 'Julieta'];
/*
for( let i = 0; i < nombres.length; i ++ ){
    console.log( nombres[i] );
}

console.log( "------" );

nombres.forEach( texto => console.log( texto ) );

const imprimeNombre = nombre => console.log( nombre );

console.log( "------" );

nombres.forEach( imprimeNombre );

let numeros = [10, 20, 12, 8, 24, 7, 30];
let resultado = [];

for( let i = 0; i < numeros.length; i ++ ){
    if( numeros[i] <= 15 ){
        resultado.push( numeros[i] );
    }
}
console.log( resultado );
console.log( "------" );

let resultado2 = numeros.filter( n => n <= 15 );

console.log( resultado2 );
*/

let arregloNombres = [];

for( let i = 0; i < nombres.length; i ++ ){
    let obj = {
        nombre : nombres[i],
        indice : i
    };
    arregloNombres.push( obj );
}
console.log( arregloNombres );

let arregloNombresMap = nombres.map( (nombre, indice) => {
    return {
        nombre : nombre,
        indice : indice
    }
});

console.log( arregloNombresMap );

let iniciales = nombres.map( nombre => nombre[0] + nombre[1] );

console.log( iniciales );


