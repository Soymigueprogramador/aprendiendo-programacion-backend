// Codigo de estado.

/*
    Los codigos de estado son los codigos que vemos en el navegador despues de hacer una peticion, estos nos indican el estado de las mismas.
*/

// Categorias de codigos de estado.

/*
    Del 100 al 199 = son de tipo informativo.
    Del 200 al 299 = son respuestas exitosas
    Del 300 al 399 = son del tipo redireccionales.
    Del 400 al 499 = son errores generados por el cliente
    Del 500 al 599 = son errores del servidor

    Los mas populares son: 
    200 = ok, todo esta bien
    400 = bad request, no se entendio la solucitud
    401 = unautorized, acceso no autorizad
    304 = forbbider, el servidor no puede responder porque las coordenadas no son validad
    404 = not found, pagina no encontrada
    500 = internal server error, error en el servidor
*/

// ¿ Que es una api ?

/*
    Una API es una aplicacion de programacion de interfaz 0 application program interfaz, 
    se usa para trasferir informacion desde el servidor al cliente.

*/

// ¿ Que es una API REST ?

/*
    REST:
    Define como sera el mensaje que llega como respuesta, este puede ser de 2 formas
    1- Formato JSON 
    2- Formato XLM

    API REST:
    Es una api que cumple con determinada arquitectura.

*/

// Caracteristicas de una API REST.

/*
    Las caracteristicas de una API REST son: 
    1- Cada peticion debe ser sin estado, es dcir que tiene que ser indipendiente entre si.
    2- Las peticiones tienen que ser dibilmente acopladas, es decir que el usuario puede hacer lo que quiera con los datos.
    3- Tiene que ser un sistema cacheable, es decir que tiene que ser guardado en la memoria cache.
*/

// Operaciones mas comunes.

/*
    Las operaciones mas comunes son:
    1- POST = Crear archivos o informacion
    2- GET = Leer archivos o informacion.
    3- PUT = Actualizar archivos o informacion.
    4- DELETE = Eliminar archivos o informacion.
    A esto tambien se lo conoce como CRUD.
*/

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

app.use( express.urlencoded({ extended: true }) );
app.use( express.json() ); // Esto es para indicar que vamos a usar un JSON.

app.get('/', ( req, res ) => {
    res.send(productos);
});

// Productos por ID.
app.get('/:id', ( req, res ) => {
    const productosId = req.params.id; 
    const productosEncontradosPorId = productos.find( item => item.id == productosId );
    if( productosEncontradosPorId ) {
        res.send(productosEncontradosPorId);
    } else {
        res.send('Producto no encontrado');
    }
});

// Creamos un nuevo producto usando el metodo POST.
app.post('/', ( req, res ) => {
    // Usamos body para crear un nuevo producto.
    const nuevoProducto = req.body; 
    // Llamamos al array de productos y usamos el metodo .push(nombreDeLaConstanteDe-req.body) para crear un nuevo producto.
    productos.push(nuevoProducto);
    // Vemos si se guarda.
    console.log(productos);
    // Le asignamos un estatus.
    res.send({ status: 'success', message: 'Producto creado con exito' });
    // En la parte superior del codigo usamos este codigo para indicar que vamos a usar u json ' app.use( express.json() ); '
});

//  Vamos a actualizar un producto con el metodo PUT.
app.put('/:id', (req, res) => {
    // Guardamos el ID.
    const { id } = req.params;
    // Recibimos los datos del producto como el nombre y el precio.
    const { nombre, precio } = req.body;

    // Buscamos el índice del producto en el array usando el ID.
    const productoIndex = productos.findIndex(producto => producto.id == id);

    // Verificamos si el producto fue encontrado.
    if (productoIndex !== -1) {
        // Si existe, actualizamos sus datos.
        productos[productoIndex].nombre = nombre;
        productos[productoIndex].precio = precio;

        console.log(productos);
        res.json({ status: 'success', message: 'Producto actualizado con éxito' });
    } else {
        // Si no existe, devolvemos un error 404.
        res.status(404).json({ status: 'error', message: 'Producto no encontrado' });
    }
});

// vAMOS A ELIMINAR UN PRODUCTO CON EL METODO delete.
app.delete('/:id', (req, res) => {
    // Guardamos el ID y luego buscamos el índice correspondiente en el array.
    const { id } = req.params;
    const productoIndex = productos.findIndex(producto => producto.id == id);

    // Verificamos si el producto fue encontrado.
    if (productoIndex !== -1) {
        // Si lo encuentra, lo elimina del array.
        productos.splice(productoIndex, 1);
        console.log(productos);
        res.json({ status: 'success', message: 'Producto eliminado con éxito' });
    } else {
        // Si no lo encuentra, devolvemos un error 404.
        res.status(404).json({ status: 'error', message: 'Producto no encontrado' });
    }
});



app.listen(PORT, ( req, res ) => {
    console.log(`Hola clase 7 de backend en el puerto http://localhost:${PORT}`);
});