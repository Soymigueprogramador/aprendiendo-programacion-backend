/*
    Las clases en JavaScript son mondes que nos permiten crear objetos con las mismas caracteristicas.
*/

// codigo de ejemplo:
/*
    La sintacis para crear clases es:
    1) palabra reservada (class)
    2) nombre de la clase (Nombre)
    3) llaves {}
    4) palabra reservada ( constructor(parametros) {} )
    5) palabra reservada ( this.parametro = parametro; ) a esto se lo conoce como "instancias". "this" hace referencia al objeto que se esta creando.
    6) fuera de la clase creamos una constante ( const nombre = new NombreDeLaClase("parametro1, parametro2") )

*/

class Familia {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    saludar() {
        console.log('Hola, somos la familia' + this.apellido);
    }
    mensaje() {
        console.log('Esperamos que nunca olvides a la familia' + this.apellido)
    }
}

const persona1 = new Familia("Pepe", "Argento", 45);
const persona2 = new Familia("Moni", "Argento", 45);
const persona3 = new Familia("Paola", "Argento", 17);
const persona4 = new Familia("Coky", "Argento", 15);

console.log(persona1, persona2, persona3, persona4);

persona1.saludar();
persona1.mensaje();

// Herencia
/*
    Dentro del paradigma de la programacion orientada a objetos dentro de JavaScript podemos pasarle propiedades y metodos pasar de una clase a otra.
    Esto nos permite crear codigo basado en clases y asi poder reutilizar muchas lineas de codigo.
    
    Para poder activar la herencia debemos teer en cuenta esto:
    1) usamos la palabra reservada (class).
    2) usamos la palabra reservada (extends)
*/

class Vecinos extends Familia {
    constructor(nombre, apellido, edad, relacion) {
        super(nombre, apellido)
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.relacion = relacion; 
    }
    saludar() {
        console.log('Hola, somos los vecinos' + this.apellido);
    }
    mensaje() {
        console.log('Los queremos!!')
    }
}

const vecino1 = new Vecinos("Dardo", "Fucenecco", 40, "vecinos");
const vecino2 = new Vecinos("Maria elena", "Fucenecco", 40, "vecinos");

console.log(vecino1, vecino2); 

vecino1.saludar();
vecino1.mensaje();

