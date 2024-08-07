let n = parseInt(prompt("Ingrese la catidad numeros que desee: "));
let array = [];
let arrayPar = [];

function operacion(array){
    for(let i = 0; i < n; i++){
        let numero = parseInt(prompt("Ingrese un numero: "));
        if (numero % 2 == 0){
            arrayPar.push(numero);
            console.log(`Los pares son: ${arrayPar} los impares son : ${array}`)
        }
        else{
            array.push(numero)
        }
    }
    return arrayPar;
}

operacion(array);