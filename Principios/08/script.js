let suma = 0; 

for (let i = 0; i < 5; i++) {
    let numero = parseFloat(prompt(`Ingrese el número ${i + 1}:`));
    suma += numero;
}
 
console.log(`La suma de los 5 números es: ${suma}`);