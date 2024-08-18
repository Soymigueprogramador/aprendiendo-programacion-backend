// ¿ Que es Express router ?


/*
    Express router es una herramienta que me permite organizar las rutas de mi app en modulos.
*/

// Ejersicio de practica sin Express router.

/*import express from "express";

const app = express();
const PORT = 3000;

const usuarios = [];
const mascotas = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hola clase 8 de backend');
});

app.get('/api/usuarios', (req, res) => {
    res.send(usuarios);
});

app.post('/api/usuarios', (req, res) => {
    const nuevoUsuario = req.body;
    usuarios.push(nuevoUsuario); 
    res.send({ status: 'success', message: 'Usuario creado con éxito' });
});

app.get('/api/mascotas', (req, res) => {
    res.send(mascotas);
});

app.post('/api/mascotas', (req, res) => {
    const nuevaMascota = req.body;
    mascotas.push(nuevaMascota); 
    res.send({ status: 'success', message: 'Mascota creada con éxito' });
    console.log(mascotas);
});

app.listen(PORT, () => { 
    console.log(`Hola clase 8 de backend en el puerto http://localhost:${PORT}`);
});*/

// Ejersicio de practica con Express router.
// Vamos a crear una carpeta llamada router y a cada archivo lo llamamos ' nombreDelArchivo.router.js '

import express from "express";
import usuariosRouter from './routers/usuarios.router.js';
import mascotasRouter from './routers/mascotas.router.js'; 

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/usuarios', usuariosRouter);
app.use('/api/mascotas', mascotasRouter);
app.use(express.static('public'));



/*
app.get('/', ( req, res ) => {
    res.send('Hola banckend');
});
*/


app.listen(PORT, () => { 
    console.log(`Servidor levantado en http://localhost:${PORT}`);
});




// Archivos estaticos.

/*
    Los archivos estaticos son archivos que no cambian durante el tiempo de ejecucion de nuestra aplicacion.
    Estos se deben guardar en la carpeta public.
    Esto lo podemos hacer ya que Express router nos permite tener archivos estaticos como:
    archivos de html, css, imagenes etc.

    Para poder trabajarlo desde que levantamos el servidor tenemos que hacer esto:
    1- app.use(express.static('public'));
    esto permite que el servidor tome los archivos del public y lo muestre por pantalla.
*/

// Prefijo virtual.

/*
    Un prefijo virtual se usa para indicarle al servidor por donde debe entrar, a este prefijo virtual se le puede indicar cualquier nombre.
    tambien funciona como una capa extra de seguridad para el dorectorio.
    Para ello usamos este codigo " app.use('/static', express.static('public')); " 
*/

// Path absoluto.

/*
    En caso de que levantemos el servidor desde una carpeta que no sea la carpeta raiz nos podemos encontrar con el error de que no encuentre la carpeta public.
    para solucionar este error hacemos esto:
    1- Trabajamos con el modulo nativo path.
    2- Lo importamos.
    3- Llamamos al app.use(express.static(__dirname + '/public')); esto nos encontrara siempre la carpeta public.
    Tambien podemos usar este codigo para unificar las rutas y la carpeta public.
    " app.use(express.static(path.join)(__dirname + '../public')); "
*/

// ¿ Que son los middlewares ?

/*
    Los middleware son funciones que se ejecutan entre las conecciones de peticiones y respues entre una cliente y un servidor.

    ¿ Para que se pueden usar ?
    1- Se puede usar para autorizar o rechazar usuarios en un login.
    2- Se puede usar para agregar o alterar la respuesta de in servidor.
    3- Se puede usar para redireccionar a otra tura.
    4- Se puede usar para frenar la ejecucion de una peticion. 

    Tipos de middleware:
    1- middlewares al nivel de aplicacion ( Son los que podemos encntrar y una en nuestra app como app.use() ).
    2- middlewares al nivel de rutas ( Son funciones que se usan para que se ejecute entre la peticion y la respuesta ).
    3- middlewares al nivel de errores ( Se usa para manejar los errores ).
    4- middlewares incorporados ( Son los que ya vienen untegrados en Node.js )
    5- middlewares de terceros ( Se puede instalar como un modulo ).
*/

// Ejemplos de middleware:

// Al nivel de rutas.
function middleware( req, res, next ) { // next le indica al sistema que tiene que seguir con la siguient funcion.
    console.log('Middleware al nivel de rutas');
    next();
};

app.get('/middleware', middleware, ( req, res ) => {
    res.send('Middleware al nivel de rutas');
});