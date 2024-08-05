let n = parseInt(prompt("Ingrese el número que desee: "));
let suma = 0;

function operacion(){
    for(let i = 0; i < n; i++){
        let num = 2 * (i + 1);
        suma += num;
    }
}

operacion();
console.log("La suma de los numeros pares es: " + suma);