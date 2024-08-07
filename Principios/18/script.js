function palabraLarga(frase){
    array = [];
    array = frase.split(" ");
    largo = "";
    for(let i = 0; i < array.length; i++){
        if(array[i] > largo){
            largo = array[i];
        }
     }
     return `La palabra mas larga es: ${largo} con una longitud de: ${largo.length} carácteres`;
}

let input = prompt("Ingrese una frase");
console.log(palabraLarga(input));