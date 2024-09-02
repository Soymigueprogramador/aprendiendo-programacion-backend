// ¿ Que es un crud ?

/*
    Crud es un acronido de 
    - Create = Crear
    - Read = Leer
    - Update = Actualizar
    - Delete = Eliminar
    Se usa para trabajar con bases de datos.
*/

// Busquedas avanzadas en MongoDB

/*
    Las busquedas avanzadas en una base de datos se usan cuando queremos un dato pero que a su vez cumpla con mas de in criterio de busqueda.
    En ese caso en MongoDB usamos el operador and 
    " $and: " se tiene que cumplir ambas condiciones.
    " $or: ", se tiene que cumplir una o ambas condiciones.
    " $ne ", No se tiene que cumplir la condicion indicada.
*/

// Conteo de datos

/*
    Los metodos de conteo de datos se usan cuando tenemos una base de datos con collecciones que son demaciado grandes.
    En estos casos vamos a usar: comandos para que nos de un estamo y un esacto.
    " .countDocuments() ", Nos muestra la cantidad esacta de documentos.
    " .countDocuments({ especie: "Perro" }) ", Nos muestra los documentos aproximados que cuentan con estos parametros
*/

// Proyecciones, sorts, skip y limit

/*
    Proyecciones:
    Se usa para cuando tenemos que buscar datos en un documentos muy grande y solo queremos algunos datos espesificos y nada mas.

    Sort:
    Nos permite ordenar de forma asendente o descenten los resultados de las consultas.

    skip:
    Se usa para limitar los decumentos devueltos en cada busqueda.

    limit:
    Se utiliza para limitar la cantidad de documentos. 
*/

// Mas operadores:

/*
    1- $set: Este operador lo vamos a usar para establecer el valor de un campo, tambien puedo actualizar un campo que ya existe o crear uno nuevo.
    2- $unset: Este operador lo vamos a usar para eliminar campos espesificos.
    3- $inc: Este operador lo usamos para aumentar o decrementar el valor numero de un campo.
    4- $rename: Este operador me permite renombrar un campo en determinado documento.
    5- $mul: Este operador me permite multiplicar el valor de un campo.
    6- $min: Este operador me permite actualizar el valor de un campo si el valor es menor al valor actual.
    7- $max: Este operador me permite actualizar el valor de un campo si el valor es mayor al valor actual.
*/

[{}] 

{}