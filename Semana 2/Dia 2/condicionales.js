
let pais = "Chile";
let edad = 16;
let num; 

if( pais === "USA" ){
    if( edad >= 21 ){
        console.log( "Ya eres mayor de edad en " + pais );
    }
    else{
        num = 21 - edad;
        console.log( "Te faltan " + num + " años para ser mayor de edad en " + pais ); 
    }
}
else{
    if( edad >= 18 ){
        console.log( "Ya eres mayor de edad en " + pais );
    }
    else{
        num = 18 - edad;
        console.log( "Te faltan " + num + " años para ser mayor de edad en " + pais ); 
    }
}