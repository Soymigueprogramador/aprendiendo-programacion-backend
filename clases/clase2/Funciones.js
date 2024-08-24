// Funciones

/*
    Dentro de los tipos de datos primitivos estan los:
    1) arrays.
    2) objetos.
    3) funciones.
*/ 

/*
    ¿Que es una funcion?
    Una funcion es un bloque de codigo que se puede reutilizar muchas veces dentro de una misma aplicacion.
    Debemos recordar que las funciones tienen que ser bloques de codigo pequelo y que solo deben cumplir una sola tarea.
    ya que de lo contrario son ploclibes a generar errores y se vuelven dificiles de leer y mantener.
*/

// Funcion declarativa.
/*
    A las funciones declarativas se las puede invocar antes o despues de su declaracion, esto es porque el lenguaje de js hace un trabajo interno 
    que pone a la invocacion al principio del codigo.  
*/ 
function saludar(curso) {
    console.log('Hola querido curso de' + curso)
};

saludar('Desarrollo web con lu')
saludar('JavaScript con samu')
saludar('React.js con samu')
saludar('backend con samu ')

// Funcion expresiva
/*
    las funciones declarativas son aquellas funciones que usamos para pasarlas como parametros.
    dentro de este grupo tenemos funciones anonimas y funciones flecha. 
*/ 

// Funcion anonima. 
let nuevoSaludo = function(curso) {
    console.log('Hola querido curso de' + curso);
};

nuevoSaludo('Ciberseguridad')


// Funcion flecha.
/*
    Las funciones flecha son un tipo de funcion abreviada, es una forma mas corta de escribir una cion expresiva.
*/

let ultimoSaludo = (curso) => {
    console.log('Hola querido curso de' + curso, 'ya casi terminamos con las funcione');
};

ultimoSaludo('Curso de backend')

/*
    Las funciones flecha se pueden resimir dependiendo de algunas cosas como:
    1) en caso de tener un solo parametro se puede suprimir los parentesis ().
    2) si solo hay una instruccion se puede suprimir las llaves {}.
    quedando asi todo el codigo en una sola linea. 
*/

let saludoFlecha = curso => console.log('Chau curso de' + curso, 'nos vemos la proxima!!');
saludoFlecha('Desarrollo web con lu')