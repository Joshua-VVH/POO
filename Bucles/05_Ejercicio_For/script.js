function primerosPares(){
    let n = parseInt(prompt("Ingrese la cantidad de números pares que desea encontrar: "));
    let arrayPares = [];
    let pares = 0;

    for(let i = 1; i <= n; i++){
        arrayPares.push(i * 2);
    }
    document.getElementById("lista").innerHTML = `<h2>Los primeros ${n} números pares son:</h2> <h1>${arrayPares}</h1>`;    
}