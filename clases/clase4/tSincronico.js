const fs = require("fs");
// Trabajo de forma sincronica con file system.

// Creando un archivo con file system.
/**
 * mencionamos al objeto fs
 * seleccionamos el metodo .writeFileSync()
 * este metodo recibe 2 parametros
    1) la ruta donde se va a guardar dicho archivo
    2) el contenido que se va a guardar en el archivo
 * levantamos el servidor con ( node laRutaDelArchivoPrincipal )
 */

const pruebaFS = "./pruebaFS.txt";

fs.writeFileSync(pruebaFS, "Hola mundo");

// Leer un archivo con file system:
/**
 * creamos una variable para almacenar la respuesta
 * la igualamos y nombramos al module .readFileSync()
 * le tenemos que pasar 2 parametros
    1) la ruta
    2) la codificacion del archivo ( utf-8 )
 * levantamos el servidor
*/

let contenido = fs.readFileSync(pruebaFS, "utf-8")
console.log(contenido);


// Verificamos si un archivo o ruta son existentes o no. 
if (fs.existsSync(pruebaFS)) {
    const respuesta = fs.readFileSync(pruebaFS, 'utf-8');
    console.log(respuesta);
} else {
    console.log('El archivo no existe');
}

// Actualizando un archivo con file system.
/**
 * usamos el mismo metodo que usamos para crear el archivo pero cambiamos el contenido del mismo.
 */

fs.writeFileSync(pruebaFS, 'Repasando Node.js') 

// Agregando mas contenido o pisando el mismo con file system.
/**
 * llamamos al modulo con el metodo ( fs.appendFileSync() )
 * le agregamos los 2 parametros:
    1) la ruta del archivo
    2) el contenido que se va a agregar
 * levantamos el servidor
 */

fs.appendFileSync(pruebaFS, 'Por que la vez anterior no aprendi ni aca!!') 
// En caso de que el archivo no exista, el metodo .appendFileSync lo va a crear.

// Eliminando un archivo con file system.
/**
 * Para eliminar solo tenemos que nombrar al modulo con el metodo .unLinkSync()
 * le pasamos un unico parametro
    1) la ruta del archivo
 * levantamos el servidor
 */

fs.unlinkSync(pruebaFS)

/* Trabajar de forma sincronica con file system tiene sus ventajas y desventajas pero aun asi no es recomendable su uso. */