// Calculadora de edad.

// Consignas del ejersicio.
/*
    1-Instalar e importar la dependencia moment
    2- Crear una variable que tenga la fecha actual usando momento 
    3- Crear una variable que contenga la fecha de nacimiento.
    4- validar si la fecha es valida usando el metodo isValid()
    5- Hacer un calculo para saber cuantos dias pasaron desde que naciste usando el metodo diff()
    6- mostrar el resultado por consola.
*/

import moment from 'moment';

let fechaActual = moment(); 
let fechaNacimiento = moment('1992-07-03'); 


if( fechaNacimiento.isValid() ) {
    const diasPasados = fechaActual.diff(fechaNacimiento, 'days');
    console.log(`Desde que naci pasaron ${diasPasados}`);
  
} else {
    console.log('Sos demaciado viejo para Node.js')
}

// Para levantar el archivo usamos el comando nodemn ./ruta-del-archivo.js