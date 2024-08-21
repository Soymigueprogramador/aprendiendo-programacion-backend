// ¿ Que es un motor de plantillas ?

/*
    Los motores de plantillas son herramientas que me permiten generar una vista para mostrar por pantalla lo que se esta entregando desde el lado del backend.
*/

// ¿ Como instalar handlebars ?

/*
    Para instalar handlebars hacemos esto:
    1- Abrimos una terminal.
    2- USAMOS EL COMANDO NPM INSTALL NOMBREdELaDependenciaOLibreria.
    3- Importamos handlebars en nuestro proyecto. 
*/

// ¿ Como trabajar con handlebars ?

/*
    Para trabajar con handlebars hacemos esto:
    1- Creamos una carpeta llamada ' views '
    2- Dentro de views creamos dos carpetas llamadas ' layouts, partials '
    3- Por fuera de las carpetas creadas en los puntos anteriores teneos que crear un archivo llamada ' index.handlebars '
    4- Importamos handlebars en nuestro proyecto de esta forma ' import escapeExpression from "handlebars"; '
    5- Configuramos handlebars en nuestro proyecto usando estas lineas de codigo:
       ' app.engine('handlebars', escapeExpression.engine()); '
       Recibe 2 parametros:
        1- El nombre de la extencion el motos de plantilla que usamos.
        2- La referencia del nombre que usamos en la importacion.
       ' app.set('view engine', 'handlebars'); '
       Recibe 2 parametros:
        1- Le indicamos que motor de plantilla vamos a usar
        2- Le indicamos cual es la extencion de dicho motor.
       ' app.set('views', './views'); '
       Recibe 2 parametros:
        1- El nombre de la carpeta en donde vamos a guardar las plantillas
        2- La ruta de donde esta esa carpeta


    Aclaraciones:
    1- Dentro de views es donde vamos a acomodar nuestras vistar.
    2- Dentro de layouts vamos a armas nuestras vistas usando una plantilla de html comun, lo llamamos ' main.handlebars '.
    3- Dentro de partials 
*/

// Extructuras, condicionales y ciclos en handlebars.

/*

*/

// Creando el servidor.
import express from "express";
import { engine } from "express-handlebars";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { title } from "process";

const app = express();
const PORT = 3000;

// Configuramos __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configuramos Handlebars:
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index', { title: ' Clase 9 con handlebars ' });
});

app.listen(PORT, () => { 
    console.log(`Servidor levantado en http://localhost:${PORT}`);
});