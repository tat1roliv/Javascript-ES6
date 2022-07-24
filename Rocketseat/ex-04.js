/*
Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32

*/

const valueCelsius = 30;
const valueFahrenheit = 72;

function celsiusToFahrenheit(valueCelsius) {
     let celsiusInFahrenheit = (valueCelsius * 9/5) + 32;
     return celsiusInFahrenheit;
}

function FahrenheitToCelsius(valueFahrenheit ) {
    let fahrenheitInCelsius = ( valueFahrenheit - 32) * 5/9 ;
    return fahrenheitInCelsius;
}

console.log(celsiusToFahrenheit(valueCelsius));
console.log(FahrenheitToCelsius(valueFahrenheit).toFixed(2));