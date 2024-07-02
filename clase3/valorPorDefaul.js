/*
    Nos permite agregarle valores por defecto a los parametros de una funcion.
*/

function saludar(nombre = 'Usuario no identificado') {
    return `Hola soy ${nombre}`;
}

saludar();

console.log(saludar())