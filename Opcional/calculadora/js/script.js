var pantalla = document.getElementById('display');
var number = '';
var sum = 0;
/**
 * Creamos function press
 * que recibe los numeros clickeados y lo muestra en pantalla 
 */

function press(num){
    number += num;
    actualizarDisplay();
}

/**
 * Funcion que actualiza nuestro display
 */
function actualizarDisplay(){
    pantalla.textContent = number;
}

/**
 * Funcion para borrar el contenido de nuestro display
 */
function clr(){
    pantalla.innerText = 0;
    number = '';
    sum = 0;
}

/**
 * Funcion que recive los operadores para realizar las acciones
 */
function setOP(operator){
    var numberToInt = parseInt(number);
    switch (operator) {
        case '+':
            sum += numberToInt
            console.log(sum);
            number = '';
            showDisplay(sum);
            break;
        case '-':
            console.log("Resta");
            break;
        case '*':
            console.log("Multiplicación");
            break;
        case '%':
            console.log("División");
            break;
        default:
            console.log("Ingrese oprador");
            break;
    }
}

/**
 * Funcion para mostrar el resultado cuando se presione =
 */
function showDisplay(resul){
    var equals = document.getElementById('equals');
    equals.addEventListener('click', ()=>{
        var ultimo = pantalla.textContent;
        resultfinal = parseInt(ultimo) + resul;
        pantalla.textContent = resultfinal;
        number = '';
    })
}