/*
    FILE SYSTEM:
    Es un manejador de archivos que ya vienen instalado en Node.js, a esto se lo conoce como " modulo nativo ".
    Esto nos permite crear operaciones ( CRUD ) como:
    1) crear / create
    2) leer / read
    3) actualizar / update
    4) eliminar / delete
    
*/

// Ventajas de file system: 
/*
    1) Es facil de usar
    2) al ser un modulo nativo nos permite hacer crud con mucha facilidad
    3) ya viene incorporado
    4) los archivos son intransferible.
*/

// Desventajas de file system:
/*
    1) consume muchos recursos
    2) no es portable
    3) no es seguro
    4) no es escalable
    5) su lectura y actualizacion es muy lenta

*/

// Formas de trabajar con file system.
/**
 * Importamos el modulo ( const fs = required('fs') )
 * 
 */

const fs = require('fs')