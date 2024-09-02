// ¿ Que son los clientes de bases de datos ?

/*
    Los clientes de bases de datos son programas que usamos para interactuar con una base de datos.
    tenemos a mongoshel que nos permite iunteractuar con la base de datos mediante los comando o cli.
    tambien tenemos a mongo compass que es una interfaz gratifa que nos permite interactuar con la base de datos de una forma mas amigable.
*/

// ¿ Que son las bases de datos como servicio ?

/*
    Eun un servicio de bases de datos, su mantenimiento y gestion se hace en la nube, es por eso que se le llama base de datos como servicio 
    o tambien conocido como DBaaS.
*/

// ¿ Como conectarme a mi base de datos mediante MongoDBCompass ?

/*
    Para conectarme a una base de datos con MongoDBCompass hacemos esto:
    1- Entramos a MongoDB Atlas y hacemos click en connect.
    2- Seleccionamos la opciuon Compass y copiamos este codigo " mongodb+srv://soymigueprogramador:<db_password>@mg-lo-quiero-3d-databas.ph2h9f6.mongodb.net/ "
    3- Reemplazamos "<db_password>" por nuestro possward y damos clicl en conectar
*/

// ¿ Como conectar una base de datos con mi aplicacion con mongoose ((ODM) Object Document Maping) ?

/*
    Para ellos necesitamos mongoose asi que hacemos esto:
    1- Abrimos una terminar e instalamos mongoose ( npm install mongoose )
    2- Creamos una carpeta llamada models y dentro un archivo loQueUsemosmodels..js e importamos mongoose
    3- Dentro del archivos antes creado vamos a crear una constante con el nombre del modelo que vamos a trabajar
    4- Definimos el esquema
    5- Definimos el modelo
    6- 
*/

//Nos conectamos a nuestra base de datos con mongoose.

/*
    Para conectarnos a la base de datos hacemos esto:
    1- Abrimos MongoDB Atras
    2- Hacemos click en connect3- Hacemos click en drivers
    4- Copiamos el codigo que nos da y lo pegamos en nuestro vscode
    5- Cambiamos los datos de nombre de usuario, contraseña y nombre de nuestra base de datos
    6- 
*/

const userName = 'soymigueprogramador'; 
const clave = 'loquiero3d';
const nameDB = 'MG-lo-quiero-3D-dataBase'

mongoose.connect(`mongodb+srv://${userName}:${clave}@mg-lo-quiero-3d-databas.ph2h9f6.mongodb.net/?retryWrites=true&w=majority&appName=${nameDB}`)
    .then(() => console.log('¡conectado!'))
    .catch(() => console.log('¡No conectado!'));

// Levantando el servidor 

import express from 'express'
import routerClientes from './routes/clientes.router.js'
import mongoose from 'mongoose';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/clientes', routerClientes);

app.get('/', (req, res) => {
    console.log('Hola a todos!!')
});

app.listen(PORT, (req, res) => {
    console.log(`¡Hola a todos! Estamos en el puerto http://localhost:${PORT}`);
});