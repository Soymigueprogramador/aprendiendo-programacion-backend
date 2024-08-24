/*
    Recordemos que JavaScript es un lenguaje mutiparadigma, podemos trabajar con codigo imperativo, declarativo, funcional y hasta  
    programacion orientada a objetos. 
*/

// Clases:

class Persona {
    constructor( nombre, apellido, edad ) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    saludo() {
        console.log(`Hola soy ${this.nombre} ${this.apellido}`);
    }
};

class Profesion extends Persona {
    constructor(nombre, apellido, edad, profesion) {
        super(nombre, apellido, edad);
        this.profesion = profesion;
    }
    mostrarProfesion() {
        console.log(`Mi profesión es: ${this.profesion}`);
    }
}

const persona1 = new Profesion('Miguel', 'Salazar', 32, 'programador');
const persona2 = new Profesion('Celeste', 'Gimenez', 24, 'profesora de música');

persona1.saludo();
persona1.mostrarProfesion();

persona2.saludo();
persona2.mostrarProfesion();

console.log(persona1.mostrarProfesion());
console.log(persona2.mostrarProfesion());

// GET
/*
    Otra de las cosas nuevas de ES6 es que se suman get y ... para poder poner a una propiedad de la clase como privada o ...
    para poner una propiedad como prabada hacemos esto:
    1) antes del constructor tenemos que indicar con el # y el nombre de la propiedad que queremos dejar como pribada.
    2) despues cuando tengamos que crearla dentro de las instancias tenemos que poner el # antes del nombre de la propiedad ( this.#nombrePropiedadPrivada ).
    3) para acceder a la propiedad privada desde fuera de la clase tenemos que poner ( get nombrePropiedad() { return #nombrePropiedadPrivada; } )
    4) para acceder a la propiedad usamos esto ( console.log(nombreClass.getNombrePropiedadPrivada) ) 
*/