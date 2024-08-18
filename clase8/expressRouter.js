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

const usuarios = [];
const mascotas = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/usuarios', usuariosRouter);
app.use('/api/mascotas', mascotasRouter);

app.get('/', (req, res) => {
    res.send('Hola clase 8 de backend');
});

app.listen(PORT, () => { 
    console.log(`Hola clase 8 de backend en el puerto http://localhost:${PORT}`);
});