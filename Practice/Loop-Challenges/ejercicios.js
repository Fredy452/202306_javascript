/**
 * Imprimir impares 1-20 
 * Usando un bucle, escribe un código que haga que console.log
 * imprima todos los valores impares del 1 al 20.
 */

for (let index = 0; index <= 20 ; index++) {
    if (index % 2 !== 0) {
        console.log(index);
    }
}

/**
 * Disminuir múltiplos de 3 
 * Usando un bucle, escribe un código que haga que console.log
 * imprima todos los valores que sean divisibles de manera uniforme por 3 del 100 al 0.
 */

for (let index = 0; index <= 100; index++) {
    if (index % 3 === 0) {
        console.log(index);
    }
}

/**
 * Imprime la secuencia 
 * Usando un bucle, escribe un código que haga que console.log 
 * imprima los valores en esta secuencia  4, 2.5, 1, -0.5, -2, -3.5
 */

var init = 4;
while (init > -4) {
    console.log(init);
    init = init -1.5;
}

/**
 * Sigma Escribe código que sume todos los valores del 1 al 100 
 * en una variable sum y, al final, console.log 
 * dé como resultado 1 + 2 + 3 + ... + 98 + 99 + 100. Deberíamos obtener 5050 al final.
 */

var sum = 0;
for (let index = 1; index <= 100; index++) {
    sum += index;
}
console.log(sum);

/**
 * Factorial Escribe código que multiplique todos los valores del 1 al 12 
 * en una variable producty, al final, console.log
 * dé como resultado  1 * 2 * 3 * ... * 10 * 11 * 12. 
 * Deberíamos obtener  479001600al final.
 */
var mul = 1;
for (let index = 1; index <= 12; index++) {
    mul *= index;
}
console.log(mul);

