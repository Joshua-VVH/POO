let texto = prompt("Ingrese un texto");
let contador = {};

function contadorCaracteres(cadena) {
    let contador = {};  
    for (let caracter of cadena) {
        
        if (caracter !== ' ') {
            contador[caracter] = (contador[caracter] || 0) + 1;
        }
    }
    return contador;
}

let resultado = contadorCaracteres(texto);
console.log("Conteo de caracteres:", resultado);

let caracterMasRepetido = '';
let maxRepeticiones = 0;

for (let caracter in resultado) {
    if (resultado[caracter] > maxRepeticiones) {
        maxRepeticiones = resultado[caracter];
        caracterMasRepetido = caracter;
    }
}

console.log(`El carácter más repetido es "${caracterMasRepetido}" con un máximo de ${maxRepeticiones} repeticiones.`);