//Ejercicio con While
function contarWhile(){
    let contador = 20;
    let array = [];

    while (contador >= 10){
        array.push(contador);
        contador--;
    }
    document.getElementById("lista").innerHTML = `<p>Números del 20 al 10 con while:</p> <br><h2>${array}</h2>`;
}

//Ejercicio con for
function contarFor(){
    let array = [];

    for (let i= 20; i >= 10; i--){
        array.push(i);
    }
    document.getElementById("lista").innerHTML = `<p>Números del 20 al 10 con for:</p> <br><h2>${array}</h2>`;
}