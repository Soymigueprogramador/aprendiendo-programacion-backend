// ¿ Que es express.js ?

/*
    Express.js es un framework de Node.js, se usa para el manejo de las rutas, tambien nos sirve para crear servidores mas complejos 
    pero trabajand de una forma mas simple. 
*/

// Creando un servidor con Express.js 

/*
    Pasos para crear un servidor con Express.js 
    1- Instalamos la dependencia de Express.js
    2- Importamos la dependencia
    3- Creamos una app
    4- Creamos las rutas que vamos a usar en el servidor.
       A las rutas les tenemos que pasar 2 parametros:
       1- La ruta a donde nos vamos a conectar
       2- Una funcion callback con el req, res.
       Tambien tenemos que llamar a la app.MetodosQueVamosUsando
    5- Ponemos a escuchar nuestro servidor
*/

// Creando el servidor con Express.js

import express from "express";

const app = express();
const PORT = 3000;

app.get('/', ( req, res ) => {
    res.send('Mi primera chamba con Express.js')
});

app.listen(PORT, ( req, res ) => {
    console.log(`Mi primer puerto backend con Express.js está activo en el puerto http://localhost:${PORT}`);
})

// Practicando y agregandole mas rutas / endpoint
app.get('/productos', ( req, res ) => {
    res.send(' Compra y mandate a mudar rata, gracias y vuelva prontos ')
});

app.get('/contacto', ( req, res ) => {
    res.send(' Contactate con nosotros ')
});