// CÓDIGO PARA CONVERTIR DIVISA
// ---------------------------------------------------------------------------

// Función "convertir()" dentro del elemento HTML "select".
function convertir(elemento) {

    // Obtenemos el valor del elemento HTML "select" ("PYG" o "USD")
    moneda = elemento.value;  // PYG o USD

    // Iteramos sobre los cuatro elementos HTML "span"
    for (var i = 1; i <= 4; i++) {
        // En cada iteración obtenemos el elemento HTML "span" (precio).
        var valorSpan = document.querySelector("#valor" + i);

        // En cada iteración obtenemos el elemento HTML "span" (tipo de moneda: "PYG", "USD")
        var tipoSpan = document.querySelector("#tipo" + i);

        // Obtenemos el contenido del elemento HTML "span" y lo covertimos a un número flotante.
        var valor = parseFloat(valorSpan.innerText);

        // Si el valor del elemento HTML "select" es "PYG", entonces...
        if (elemento.value === "PYG") {
            // Fórmula de PYG a USD
            var resultado = valor * 7280;
            // Actualizamos el contenido del elemento HTML "span" (valor)
            valorSpan.innerText = resultado.toFixed(0);
            // Actualizamos el contenido del elemento HTML "span" (tipo)
            tipoSpan.innerText = "USD 🇺🇸";
        }

        // Si el valor del elemento HTML "select" es "USD", entonces...
        if (elemento.value === "USD") {
            // Fórmula de USD a PYG
            var resultado = valor / 7280;
            // Actualizamos el contenido del elemento HTML "span" (valor)
            valorSpan.innerText = resultado.toFixed(4);
            // Actualizamos el contenido del elemento HTML "span" (tipo)
            tipoSpan.innerText = "USD 🇺🇸";
        }
    }
}


// CÓDIGO PARA CONTAR LIKES
// ---------------------------------------------------------------------------

// Array de elementos HTML del "span"
var likes = [
    document.querySelector("#like1"),  // índice[0]
    document.querySelector("#like2"),  // índice[1]
    document.querySelector("#like3"),  // índice[2]
    document.querySelector("#like4"),  // índice[3]
];

// Función "like()" dentro del elemento HTML "button".
function like(indice) {
    // Obtenemos el elemento HTML del "span" con el índice que recibimos.
    var valor = likes[indice];
    // Obtenemos el contenido del elemento HMTL "span" y lo convertimos a un número entero.
    valor = parseInt(valor.innerText);
    // Aumentamos el valor en 1.
    valor++;
    // Actualizamos el contenido del elemento HTML "span".
    likes[indice].innerText = valor;
}