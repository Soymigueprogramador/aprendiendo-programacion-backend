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

// ¿ Que es multer ?

/*
    Multer es un middlewares de terceros que me permite gestionar de forma simple la carga de archivos al servidor.
*/

// Trabajando con codigo de multer:

/*
    Pasos para trabajar con multer:
    1- Lo instalamos con npm i multer
    2- Lo importamos en nuestra app.js con import multer from 'multer'
    3- Configuramos la ruta donde multer va a guardar los archivos cargados con esta linea de codigo. 
       const upload = multer({ dest1: './public/img/subidas' });
    4- Creamos la ruta con el metodo post 
       app.post('/upload', upload.single('imagen'), (req, res) => {
          res.send('Imagen subida');
       });
       Como en este caso lo estamos subiendo mediante postman tenemos que hacer esto:
       A) Abrimos postman
       B) Configuramos postman con estos parametros:
          1- Seteamos postman en el metodo POST.
          2- Usamos esta URL http://localhost${PUERTO}/upload.
          3- Seleccionamos body
          4- Seleccionamos form-data
          5- En el item de key ponemos upload.single('LaClaveLaSacasDeAca')
          6- Enter en send
    5- Configuramos para que cuando suba un archivo se guarde en una rita espesifica y con el nombre origina. para ellos usamos este codigo 
       const storage = multer.diskStorage({
          destination: (req, file, cd) => {
            cd(null, './public/img/');
          },
          filename: (req, file, cd) => {
             cd(null, file.originalname);
          }
       });
       Dbemos tener en cuenta que primero debemos declarar este codigo y despues declarar la constante de upload.
*/

import multer from 'multer';


const storage = multer.diskStorage({
    destination: (req, file, cd) => {
        cd(null, './public/img/');
    },

    filename: (req, file, cd) => {
        cd(null, file.originalname);
    }
});

const upload = multer({ storage });

app.post('/upload', upload.single('imagen'), (req, res) => {
    res.send('Se subió');
});
