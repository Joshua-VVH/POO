/* Recibir un arreglo númerico y sumar todos sus elementos. Mostrar arreglo y resultado de la suma. */

function suma(){ 
    let array = [];
    let cantidad = parseInt(prompt("Ingrese la longitud del array: "));
    let original = [...array];

    for (let i = 0; i < cantidad; i++){
        let numeros = parseInt(prompt("Ingrese los números a sumar en el array: "));
        array.push(numeros)
    }

    for(let i = 0; i < cantidad; i++){
        if(array[i] < 0){
            array[i] = 0;
        }
    }
    document.getElementById("elemento").innerHTML = `Arreglo original: ${original} <br> Nuevo arreglo: ${array.join(", ")}`;
};