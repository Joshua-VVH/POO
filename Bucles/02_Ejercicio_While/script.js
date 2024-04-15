function sumaNumeros(){
    let contador = 1;
    let suma = 0;
    let total = '';


    while(contador <= 10){
        suma += contador;
        if (contador !== 10){
            total += contador + '+';
        }
        else {
            total += contador;
        }
        contador++;
    }
    document.getElementById("lista").innerHTML = `La suma de los números (${total}) es: <h2>${suma}</h2>`
}   