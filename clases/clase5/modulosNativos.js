// ¿ Que es un modulo ?

/*
    Un modulo es un archivo que nos contiene un conjunto de funciones que nos permite resolver una tarea en particular.
*/

// ¿ Como vincular un modulo con nuestro archivo raiz ?

/*
    Para ello tenemos 2 formas:
    1- CommonJS = Lo usamos para enlazar modulos nativos como file enlazar nuestros archivos.
    2- ES module = Lo usamos para crear 
*/

// Asi es como se enlazar archivos.
/*const saludo = require('./module/saludo.js');*/

// SE exporto como un objeto asi que debemos invocarlo segun sus metodos.
/*
    saludo.dia();
saludo.medioDia();
saludo.noche();
*/

import { temprano, noche } from './module/saludo.js';
temprano();
noche();

// Modulos nativos.
/*
    Los modulos nativos de NOde.js son bloques de codigo que contienen funciones con el propocito 
    de ejecutar una tarea unica y determinada. 

    Los modulos nativos mas usados son:
    File System: Para trabajar con sistema de archivos.
    HTTP: Para crear un servidor web.
    cripto: Para encriptar datos.
    timers: setTimeout, setInterval 
    console: Para mostrar mensajes por consola
    path: Para trabajar con rutas de archivos.
*/