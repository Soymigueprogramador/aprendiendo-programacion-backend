// ¿ Que es websoquet ?

/*
    Socket.oi es un protocolo de comunicacion que permite la comunicacion en tiempo real entre el frontend y el backend.
*/

// ¿ Como trabajar con socket.oi ?

/*
    Para trabajar con socket.io tenemos que hacer esto:
    1- Creamos una instancia y le pasamos el servidor como parametro.
        para ello creamos este codigo 
        const io = new Server(httpServer);
    2- Creamos un array para guardar a los clientes.
    3- Creamos una coneccion del lado del cliente usando este codigo:
        ' io.on('connection', (socket) => {
            console.log('Un cliente se ha conectado');
    
            socket.on('disconnect', () => {
                console.log('Un cliente se ha desconectado');
            });
        }); '
        Este codigo nos pide que le pasemos 2 argumentos como:
        1) Un strign con el nombre del evento.
        2) Una funcion flecha con el evento que te esta pasando el cliente.
    
    Aclaraciones:
    1- Con el metodo 'on' vamos a escuchar mensajes atravez de socket.oi
    2- Con el metodo 'emit' vamos a emitir mensajes atravez de socjet.oi
*/

import express from "express";
import viewsRouter from './routers/views.router.js';
import { engine } from "express-handlebars";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { Server } from 'socket.io';

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('./views', viewsRouter);
app.use(express.static('public'));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index', { title: 'Clase 10 con handlebars' });
});

const httpServer = app.listen(PORT, () => {
    console.log(`Servidor levantado en http://localhost:${PORT}`);
});

const io = new Server(httpServer);

let messages = [];

io.on('connection', (socket) => {
    console.log('Un cliente se ha conectado');
    
    socket.on('message', data => {
        messages.push(data);
        io.emit('messagesLogs', messages);
    });
    
    socket.on('disconnect', () => {
        console.log('Un cliente se ha desconectado');
    });
});