let num_1 = parseInt(prompt("Ingrese el primer numero: "));
let num_2 = parseInt(prompt("Ingrese el segundo numero: "));
let opcion  = parseInt(prompt("Seleccione una operacion:\n1.Suma\n2.Resta\n3.Multiplicacion\n4.division"));
function operacion(){
    switch(opcion){
        case 1:
            suma = num_1 + num_2;
            console.log("la suma es: " + suma);
            break;
        case 2:
            resta = num_1 - num_2;
            console.log("la resta es: " + resta);
            break;
        case 3:
            multiplicacion = num_1 * num_2;
            console.log("la multiplicacion es: " + multiplicacion);
            break;
        case 4:
            division = num_1 / num_2;
            console.log("la division es: " + division);
            break;
    }
}
operacion();