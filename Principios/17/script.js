let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius: "));

function celsiusAFahrenheit(celsius) {
    
    if(isNaN(celsius)){
        return "Por favor, ingrese un número válido.";
    }
    else{
        return (celsius * 9/5) + 32; 
    }
}


let resultado = celsiusAFahrenheit(celsius);
console.log(`El equivalente de ${celsius}° celsius a fahrenheit es: ${resultado}°`);