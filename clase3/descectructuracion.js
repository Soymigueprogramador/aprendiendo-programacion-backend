/* 
    Con la llegade ECMAScript6 se implementa la descestructuracion, esto nos permite extraer datos de un objeto o array y
    guardarlo dentro de una variables auxiliar para que asi sea mas facil el trabajo dentro de la aplicacion.
*/

// Descestructuracion.
const pelicula = {
    titulo: 'El padrino',
    director: 'Francis Ford Copola',
    genero: 'Drama',
    lanzamiento: 1972,
};

// Antes de ECMAScript (ES6)
/* 
    Antes de ES6 si queriamos copiar algun valor de un objeto y llevarlo a una variable auxiliar teniamos que hacer esto.
*/

// Copia por valor.
//const titulo = pelicula.titulo;
//const director = pelicula.director;
//const genero = pelicula.genero;
//const lanzamiento = pelicula.lanzamiento;

//console.log(titulo, director, genero, lanzamiento)

// Con la llegada de ES6.
/* 
    Con la llegada de ES6 se implementa la desestructuracion.
    Sintaxis:
    1) let o const segun corresponda.
    2) Abrimos llaves y escribimos el nombre de la variable que queremos crear.
    3) Lo igualamos al nombre del objeto.
*/

let { titulo, director, genero, lanzamiento } = pelicula;

// ¿Que pasa si un objeto tiene otro objeto anidado?
/* 
    En caso de que un objeto tenga otro objeto anidado hacemos esto:
    1) let o conset segun sea necesario.
    2) entre llaves ponemos el nombre del objeto anidado.
    3) nombre de la propiedad.
    4) lo igualamos al nombre del objeto principal.
*/

const pelicula2 = {
    titulo: 'El padrino',
    director: 'Francis Ford Copola',
    genero: 'Drama',
    lanzamiento: 1972,
    protagonista: {
        nombre: 'al',
        apellido: 'pachino',
    }
};

const {protagonista: {nombre}} = pelicula

console.log(pelicula)