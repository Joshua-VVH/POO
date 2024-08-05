let num_1 = parseInt(prompt("Ingrese el primer número: "));
let num_2 = parseInt(prompt("Ingrese el segundo número: "));

function identificarMayor(num_1, num_2){
    if (num_1 > num_2){
        console.log(`El orden es ascendente.`);
    }
    else{
        console.log(`El orden es descendente.`);
    }
}

identificarMayor();