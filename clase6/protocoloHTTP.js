// ¿ Que es un servidor ?

/*
    Un servidor es un administrador de recursos web, Su principal funcion es devolver peticiones como una busqueda en google.
    tenemos 2 tipos de servidores:
    1- Servidores de hardware = Son como una computadora fisica
    2- Servidor de software = Es como un sistema operativo.

*/

// Protocolo HTTP.

/*
    HTTP es un protocolo de comunicacion que se usa para definir los protocolos de comunicacion entre 2 o mas dispositivos.
    Cliente: Es una persona o dispositivo.
    Servidor: Es el hardware o software que devuelve una respuesta.
    Cliente = peticion = request = req
    Servidor = respuesta = response = res
*/

// modulo nativo HTTP 

/*
    eS UN MODULO NATIVO DE nODE QUE NOS PERMITE CREAR UN SERVIDOR Y ENVIAR UNFORMACION A TRAVEZ DEL PROTOCOLO http. 
*/

// pASOS PARA CREAR UN SERVIDOR CON EL MODULO NATIVO DE http.

/*
    1- Debemos importarlo.
    2- Creamos el servidor
    3- Ponemos a escuchar a nuestro servidor en el puerto 3000 0 8080
    4- 
*/

// Codigo para crear un servidor con HTTP,

import http from 'http';

const puerto = 3000;

const server = http.createServer((req, res) => {
    res.end('Mi primer servidor backend');
});

server.listen(puerto, () => {
    console.log(`Mi primer puerto backend está activo en el puerto ${puerto}`);
});

// Este metodo sirve para crear un servidor con HTTP.