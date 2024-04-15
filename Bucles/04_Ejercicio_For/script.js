function numeroMayor(){
    let arrayNum = [];
    let numMayor = 0;

    for(let i = 0; i < 5; i++){
        let num = parseInt(prompt("Ingrese un número: "));
        arrayNum.push(num);
        if(numMayor < num){
            numMayor = num;
        }
    }
    document.getElementById("lista").innerHTML = `De los números ingresados: ${arrayNum.join(", ")} <h2>Número mayor:</h2> <h1>${numMayor}</h1>`;
}