let input = prompt("Ingrese un número entero no negativo para calcular su factorial:");
let N = parseInt(input); 

function calcularFactorial(N) {
    
    if (N < 0 || !Number.isInteger(N)) {
        console.log("Por favor, ingrese un número entero no negativo.");
        return;
    }

    let factorial = 1; 
    console.log(`Cálculo del factorial de ${N}:`);

    for (let i = 1; i <= N; i++) {
        factorial *= i; 
        console.log(`${i}! = ${factorial}`); 
    }

    console.log(`El factorial de ${N} es: ${factorial}`);
}

calcularFactorial(N);