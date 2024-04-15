function primerosPares(){
    let array = [];
    let num = 2;
    let counter = 0; 

    while (counter < 10){
        array.push(num);
        num += 2;
        counter++;
    }
    document.getElementById("lista").innerHTML = `<p>Primeros 10 números pares:</p> <br><h2>${array}</h2>`;
}