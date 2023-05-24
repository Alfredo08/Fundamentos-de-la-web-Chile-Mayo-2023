
let nombres = [ "Alex", "Martha", "Roger", "Alfredo", "Ana", "Marco" ];
                //0        1        2           3       4       5

for( let i = 0; i < nombres.length; i ++ ){
    console.log( nombres[i] );
}

console.log( nombres );
console.log( nombres[1] );

nombres[2] = "Javier";
console.log( nombres );

console.log( "Length: " + nombres.length );

nombres.push( "Julieta" );
console.log( "Length: " + nombres.length );
console.log( nombres );

nombres.pop();
nombres.pop();
console.log( "Length: " + nombres.length );
console.log( nombres );

nombres.unshift( "Julieta" );
console.log( "Length: " + nombres.length );
console.log( nombres );

// Método .shift() remueve el primer elemento del arreglo
// Método .splice() remueve o agrega un elemento a cualquier posición del arreglo

