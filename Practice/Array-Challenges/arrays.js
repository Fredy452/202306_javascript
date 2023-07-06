/**
 * Siempre hambriento
 * Escribe una función a la que se le asigne un arreglo, y cada vez que el valor sea "comida"
 * debería mostrar "delicioso"en la consola. Si "comida" no estaba presente en el arreglo,
 * que la consola registre "Tengo hambre" una vez.
 */

function siempreHambriento(arr) {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === "comida") {
            console.log("delicioso");
        }
    }
    console.log("Tengo hambre");
}
siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
//siempreHambriento([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"

/**
 * Filtro paso alto
 * Dado un arreglo y un valor cutoff, devuelve un nuevo arreglo
 * que contenga solo los valores mayores a cutoff.
 */

function highPass(arr, cutoff) {
    var filteredArr = [];
    // tu código aquí
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > cutoff) {
            filteredArr.push(arr[index]);
        }
        
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // esperamos de vuelta [6, 8, 10, 9]

/**
 * Mejor que el promedio
 * Dado un arreglo de números, devuelve un recuento de
 * cuántos de los números son mayores que el promedio.
 */
function betterThanAverage(arr) {
    var sum = 0;
    // calcula el promedio 
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
    }
    var promedio = sum / arr.length;
    var count = 0
    // cuenmta cuánmtas variables son mayores que el promedio
    for (let i = 0; i< arr.length; i++) { 
        if (arr[i] > promedio) {
            count ++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta

/**
 * Arreglo invertido
 * Escribe una función que invierta los valores de un arreglo y los devuelva.
 */

function reverse(arr) {
    // tu código aquí
    arr.reverse();
    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]
