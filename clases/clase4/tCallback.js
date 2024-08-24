// Trabajando con callbacks.
/*
    Las funciones callbacks son funciones que pasamos como argumento a otras funciones.
    antes de ES6 se usaban para trabajar de forma sincronica.
*/

// Ventajas de las funciones callback.
/**
    * 1. Permite que una función se ejecute después de que otra función haya terminado
*/

// Desventajas de las funciones callback.
/**
    * 1. Es difícil de leer y de entender.
    * 2. es facil que se cometan errores.
    * 3. se dificulta su lectura cuando se empiezan a anidar funciones ( infierno de callbacks )
*/

// Ejemplo de callback.
/**
    * 
    * Una funcion callbacks necesita 3 parametros.
    * 1. La ruta de referencia.
    * 2. El contenido del archivo que vamos a crear.
    * 3. El callbacks que va a controlar los errores
 */


const { error } = require('console')
const fs = require('fs')

const conCall = './callbacks.txt'

// Infierno de callbacks.
fs.writeFile(conCall, 'Probando callbacks en Node.js', (error) => {
    if (error) {
        return console.log('Archivo no creado');
    } else {
        fs.readFile(conCall, 'utf-8', (error, contenido) => {
            if (error) {
                return console.log('Error al leer el archivo');
            } else {
                console.log('Archivo creado y leído con éxito');
                console.log(contenido); 
                fs.appendFile(conCall, 'Más contenido', (error) => {
                    if (error) {
                        return console.log('Error al agregar más contenido');
                    } else {
                        return console.log('Contenido agregado con éxito');
                    }
                    fs.unlink(conCall, (error) => {
                        if (error) {
                            console.log('Error al eliminar el archivo');
                        }
                    })
                });
            }
        });
    }
});

// Recordatorio.
/**
    * 1. A la hora de trabajar con file system y callbacks debemos recordar es igual a la forma sincrona pero sin el ( sync ).
    * 2. En todos los casos de uso de callbacks se usa el parametro de ( error )
    * 3. En el caso de lectura de un archivo este lleva 2 parametros ( error, contenido )
*/