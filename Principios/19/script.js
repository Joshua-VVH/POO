let num = parseInt(prompt("Ingrese un numero:" ))

function numPrimos(num){
    for (let i=0; i<num; i++){
        if(num[i] % 1){
            num[i] = num
        }
        else if(num[i] % num){
            num[i] = num
        }
    }
    console.log(`el numero primo es: ${num}`);
}
numPrimos(num);