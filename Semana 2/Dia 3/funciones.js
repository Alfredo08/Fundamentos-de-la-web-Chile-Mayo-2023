function sumaDosNumeros( num1, num2 ){
    let total = num1 + num2;
    return total;
}

let resultado = sumaDosNumeros( 10, 20 );
console.log( resultado );
let resultado2 = sumaDosNumeros( 50, 100 );
console.log( resultado2 );
let final = sumaDosNumeros( resultado, resultado2 );
console.log( final );
