// ¿ Que es el objeto request ?

/*
    Es un objeto que se encarga de trabajar con la peticion generada por el cliente.
*/

// Parametros para obtener datos de la URL.

/*
    Los parametros que necesitamos son: 
    1- req.params = Se usa para obtener elementos dinamicos desde l ruta en la que esta llamando el cliente. ( Se hace con /: )
    2- req.query = Se refiere a las multipmes consultas que se le pueden hacer a un endpoint determinado.
       ( Se usa ? y para agregar otro dato se usa & )

*/

// Practicando con el objeto request

const productos = [
    { id: 1, nombre: 'pollo', precio: 10000 },
    { id: 2, nombre: 'carne', precio: 2000 },
    { id: 3, nombre: 'pescado', precio: 6000 },
    { id: 4, nombre: 'papas', precio: 1500 },
    { id: 5, nombre: 'arroz', precio: 300 }
];


import express from "express";

const PORT = 3000;
const app = express();

// Si queremos trabajar con datos mas complejos es mejor usar este codigo. 
app.use( express.urlencoded({ extended: true }) )

app.get('/', ( req, res ) => {
    res.send('Aprendiendo programacion back-end');
});

app.get('/productos', ( req, res ) => {
    res.send(productos);
});

// Encontrando un producto por su ID.
app.get('/productos/:id', (req, res) => {
    // Obtener el ID del producto desde los parámetros de la URL
    let productosId = req.params.id;
    
    // Buscar el producto en el array de productos
    const productoEncontrado = productos.find(item => item.id = productosId ); // parseInt(productosId)

    // Validación para ver si el producto existe o no
    if (productoEncontrado) {
        res.send(productoEncontrado);
        console.log(productoEncontrado);
    } else {
        res.send('Producto no encontrado');
        console.log('Producto no encontrado');
    }
});

// Encontrando un producto por su nombre.
app.get('/productos/:nombre', (req, res) => {
    let productosNombre = req.params.nombre;
    const productosEncontradosPorNombre = productos.find(item => item.nombre = productosNombre ); // parseInt(productosNombre)
    if (productosEncontradosPorNombre) {
        res.send(productosEncontradosPorNombre);
    } else {
        res.send('Producto no encontrado');
    }
});

// Trabajando con query.
app.get('/clientes', (req, res) => {
    // Desestructuramos `nombre` y `apellido` de `req.query`.
    const { nombre, apellido } = req.query;
    res.send(`Bienvenido ${nombre} ${apellido}`);
});









app.listen(PORT, ( req, res ) => {
    console.log(`Mi primer puerto backend con Express.js está activo en el puerto http://localhost:${PORT}`);
});