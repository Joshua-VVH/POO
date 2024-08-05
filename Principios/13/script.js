let n = parseInt(prompt("Ingrese la catidad números que desee: "));
let array = [];
function operacion(suma){
    for(let i = 0; i < n; i++){
        let numero = parseInt(prompt("Ingrese un número: "));

        if (numero % 2 === 1){
            array.push(numero);
            suma += numero;
        }else{
            console.log("El número ingresado no es par, intente denuevo");
            i--;
        }
    }
    return suma;
}
let totalSuma = operacion(0);
console.log("La suma de los números inpares es: " + totalSuma);