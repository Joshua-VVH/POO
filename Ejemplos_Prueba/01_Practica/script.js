/* Recibir un arreglo númerico y modificar los elementos que sean negativos por 0. Mostrar Arreglo original y arreglo modificado. */

function noNegative(){ 
    let array = [];
    let cantidad = parseInt(prompt("Ingrese la longitud del array: "));

    for (let i = 0; i < cantidad; i++){
        let numeros = parseInt(prompt("Ingrese los números a ingresar en el array: "));
        array.push(numeros)
    }

    let original = [...array];
    for(let i = 0; i < cantidad; i++){
        if(array[i] < 0){
            array[i] = 0;
        }
    }
    document.getElementById("elemento").innerHTML = `Arreglo original: ${original} <br> Nuevo arreglo: ${array.join(", ")}`;
};