/*
    Las Clouseres son patrones que nos permiten trabajar con funciones anidadas, esto esta desde antes de ES6 
    para poder mantener variables ocultas.

    Requisitos para el trabajo con Clouseres:
    para trabajar con las Clouseres necesitamos tener:
    1) funcion padre.
    2) funcion hijo o funcion anidada.
    3) variable que queremos mantener oculta.
*/

// Codigo de ejemplo: 
function padre() {
    let hijo = 'Miguel';
    function oculta() {
        console.log(hijo);
    };
    return oculta;
};
let clausula = padre();
clausula();
// Antes de ES6 se podia usar esta forma para ocultar variables.

// El mismo codigo pero mas simple.
function padreB() {
    return function() {
        console.log('Miguel');
    };
}

let clausulaB = padreB();
clausulaB();

// Ejemplo de codigo para un contador.
// Creamos la fruncion crearContador()
function crearContador() {
    let contador = 0; // Creamos una variable con un valor inicial.

    // Retornamos lo que queramos hacer, ya sea incrementar, decrementar y demas.
    return {
        incrementar: function() {
            contador++;
            return contador;
        },
        decrementar: function() {
            contador--;
            return contador;
        },
        restablecer: function() {
            contador = 0;
            return contador;
        },
        obtenerValor: function() {
            return contador;
        }
    };
}
// Creamos una constante para guardar la cuncion principal.
const contador = crearContador();

// Mostramos los resultados de cada llamada.
console.log(contador.incrementar()); 
console.log(contador.incrementar()); 
console.log(contador.decrementar()); 
console.log(contador.restablecer()); 
console.log(contador.obtenerValor()); 