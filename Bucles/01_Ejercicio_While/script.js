function cincoEnCinco(){
    let counter = 0;
    let array = [];

    while (counter <= 100){
        array.push(counter);
        counter++;
    }
    document.getElementById("lista").innerHTML = `<p>Números del 0 al 100 con while (De 5 en 5):</p> <br><h2>${array}</h2>`;
}