let n = parseInt(prompt("Ingrese el número que desee: "));

let multi = 0;
function operacion(){
    for(let i = 0; i < n; i++){
        let num = 3 * (i + 1);
        multi += num;
    }
}
operacion();
console.log(`La suma de los primeros ${n} números da como resultado: ${multi}`);