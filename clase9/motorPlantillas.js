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
    A los archivos .handlebars le podemos pasar distintos elementos para que sean renderizados.

    Estructura:
    Pasos para renderizar estos datos:
    1- Elejimos el endpoint o ruta donde lo vamos a mostrar.
    2- Creamos un objeto dentro del bloque de codigo de la ruta.
        const estudianteDeBackendConSamu = {
            nombre: 'Miguel',
            apellido: 'Salazar',
            soyBackend: true
        };
    3- En la linea donde indicamos es archivo que renderizaremos tenemos que agregarle esto para indicarle que va a renderizar.
       res.render('index', { estudianteDeBackendConSamu, title: ' Clase 9 con handlebars ' });
    4- En el archivo .handlebars tenemos que abrir doble llave e indicar el nombre del objeto.propiedad del mismo
       {{ nombreDelObjeto.propiedadAMostrar }}
    
    condicionales: 
    Pasos para renderizar condicionales:
    1- Vamos al archivo .handlebars en donde queremos usar el codicional y hacemos este codigo
       
       {{#if estudianteDeBackendConSamu.soyBackend }}
         <p> ¡Sí, soy backend, por ahora...! </p>
       {{else}}
         <p> No soy backend, solo me gusta el frontend...! </p>
       {{/if}}
    2- En el objeto solo tenemos que cambiar el valor buleano y se cambia el bloque de codigo a renderizar.
    Aclaracion:
    1- No se deben dejar espacion entre las etiquetas if, else y el codigo debe estar escrito asi como en el ejemplo.
    2- Handlebars solo acepta renderizado condicional con buleanos.
    3- En caso de tener una exprecion y queres pasarla a buleado tenes que hacer esto:
       nombreExprecion: nombrePropiedadAComprar = valorDePropiedad
       trabajo: salario > 1500000.
       Esto lo tenes que hacer en la app.

    Ciclos:
    Pasos para trabajar con ciclos en handlebars:
    1- Para crear y usar cicle en handlebars tenemos que hacer esto.
       {{#each productos}}
        <div>
            <img src={{ this.imagen }} alt={{ this.nombre }} />
            <h2> Nombre: {{ this.nombre }} </h2>
            <p> Descripcion: {{ this.descripcion }} </p>
            <p> Precio: {{ this.precio }} </p>
            <button> Comprar </button>
        </div>
       {{/each}}
       En este caso es un array de productos pero sirve como ejemplo.
*/

// Carpetas layout y partials:

/*
    Layout:
    En esta carpeta se guarda el archivo main.handlebars con el codigo de las plantillas que forman nuestra app.

    Partials:
    En esta carpeta se guardan los codigo fragmentados que son reutilizables para nuestra app.
*/

// Acomodando el router en handlebars.
/*
    Pasos para ordenar el router en handlebars.
    1- Creamos un archivo llamado ' views.router.js ' dentro de la carpeta routers.
    2- Dentro del archivos ' views.router.js ' creamos los endpoint necesarios.
    3- Dentro del archivo raiz tenemos que importarlo y configurarlo de esta forma
       A) import nombreDELarchivo from './rutaDelArchivo';}
       B) app.use('/nombreDelArchivo', nombreDelArchivoEnLaImportacion);
*/

// Agregando css y JavaScript.

/*
    Debemos recordar que la carpeta public la vamos a usar para guardar los archivos estaticos que deben estar al alcance del usuario.
    Para agregar archivos de css y js hacemos esto:
    1- Creamos la carpeta public por fuera de la carpeta src.
    2- Dentro de public creamos una carpeta para css y otra para js
    3- Dentro de la carpeta js creamos un archivo .js y lo enlazamos asi en el archivo que queremos enlazar
       <script src="/js/index.js"></script>
       En css hacemos lo mismo solo que en este caso lo enlazamos en el main.handlebars dentro de la etiqueta dead
       <link rel="stylesheet" href="/css0/styles.css" />
*/

// Creando el servidor.
import express from "express";
import viewsRouter from './routers/views.router.js';
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
app.use('./views', viewsRouter);
app.use(express.static('public'));


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