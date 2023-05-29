
function changeCity( element ){
    alert( "Loading weather report..." );
}

function acceptCookie( element ){
    let cookieContainer = element.closest( ".cookie" );
    cookieContainer.remove();
}

function changeMetric( element ){
    let temperatures = document.querySelectorAll( ".max, .min" );
    console.log( temperatures );

    for( let i = 0; i < temperatures.length; i ++ ){
        let currentTemp = Number( temperatures[i].textContent );
        if( element.value === "celcius" ){
            let celciusResult = ( currentTemp - 32 ) / 1.8;
            temperatures[i].textContent = Math.round( celciusResult );
        }
        else{
            let farenheitResult = ( 9 / 5 ) * currentTemp + 32;
            temperatures[i].textContent = Math.round( farenheitResult );   
        }
    }
    
}