// Concepto de base de datos.

/*
    Una base de datos es un sistema que recopila y organiza datos.
*/

// ¿ Cuales son los beneficios de trabajar con una base de datos ?

/*
    Los beneficios son:
    1- Es mas segundo
    2- Permite una secmentacion de datos ( Dentro de una base de datos podes crear una coleccion para productos, otra coleccion para usuarios )
    3- Permite una gestion simple
*/

// Diferencias entre bases de datos relacional y no relacional

/*
    Dentro de lo que son las bases de datos tenemos varios modelos pero los mas conocidos son:
    1- Bases de datos relacional o SQÑ
    2- Bases de datos no relacionales o NoSql

    Diferencias: 
    Relacionales (SQL):
    Hace referencia a una estructura de referencia, dependencia y de cambios controlados.
    Es una base de datos cuya estructura es similar a una tabla o una planilla de excel, contiene filas, columnas, id y demas.

    NoRelacional (NoSQL);
    Hace referencia a una estrcutura mas flexible, menos estructurada y de cambios mas rapidos.
    Se usa en sistemas culla informacion cambia y crece constantemente, contiene clave valor, documentos, graficos y memoria entre otros.
*/

// ¿ Cuando es recomendable usar cada modelo ?

/*
    Modelo relacional (SQL) 
    1- Cuando no es necesario que los datos crescan o cambien constantemente.
    2- Cuando las necesidades se pueden atender en un solo servidor.
    3- Cuando no tienen picos de uso generados por los usuarios.

    Modelo no relacional (NoSQL):
    1- Cuando el volumen o cantidad de datos crece rapidamente.
    2- Cuando se requieren multiservidores porque la demanda de consumo es muy alta.
    3- Cuando tengamos pucos de uso
*/

// ¿ Como descargar e instalar MongoDB en windows ?

/*
    Pasos para su e instalacion:
    Descarga:
    1- Vamos a su sitio web: "https://www.mongodb.com/try/download/community";
    
    Instalacion:
    1- Despues de que se descargo el ejecutable lo abrimos.
    2- Abrimos el instalador y seguimos los pasos indicados
    3- En una de las pantallas nos pide elegir entre instalacion completa o customisada, elegimos la instalacion completa
    4- En las ultimas versiones de MongoDB tenemos que instalar mongoshell por separado asi que vamos a si pagina web 'https://www.mongodb.com/try/download/shell';
    5- Despues de descargar e instalar MongoDB abrimos el CMD y ejecutamos el comando mongosh.
       Si no lo hacemos desde la ruta en donde estan los archivos descargados no tirara erro.
       Esto se puede cambiar enlazando a MongoDB con variable de entorno y lo hacemos asi:
       - Abrimos la ubicacion de la carpeta donde esta instalado MongoDB y copiamos la ruta
       - En la barra de busqyeda de windoes ponemos ' editar las variables de entorno del sistema ' y se nos abre un menu 
       - Click en variables de entorno 
       - Seleccionamos path y click en editar
       - Pegamos la ruta que habiamos copiado antes
       - Click en aceptar y terminamos el proceso    
}*/

// Comandos iniciales de MongoDB

/*
    Comandos iniciales para arrancar:
    1- show dbs = Nos muestra todas las bases de daqtos que tenemos en nuestro sistema
    2- use nombreDeLaBaseDeDatos = nos crea y nos posiciona dentro de nuestra base de datos y en caso de que usemos este comando con el nombre
       de una base de datos que ya existe simplemente nos va a llevar hacia ella.
    3- db.createCollection("nombreDeLaColeccion") = Nos crea una coleccion dentro de nuestra base de datos
    4- db.nombreDeLaColeccion.insertOne({ datos }) = Nos crea un datos dentro de la coleccion
    5- db.nombreDeLaColeccion.find() = Nos permite rebisar los datos dentro de la coleccion que esta dentro de la base de datos
*/