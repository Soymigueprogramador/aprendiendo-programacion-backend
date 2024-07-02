// ECMAScript 7 (ES7)
/*
    Esta version de ES7 salio en 2016 y nos trajo 2 cambios, estos fueron 
    1) El operador de exponenciacion ( ** ) se escribe con 2 asteriscos.
    2) El ( include ) que me permite saber si hay elementos dentro de un objeto o array. 
*/

// Antes de ES7: Operador de exponenciacion ( ** )
/*
    Si teniamos que hacer calculos matematicos teniamos que usar math.
*/

let base = 4;
let exponent = 3;
let resultado = Math.pow(base, exponent);
console.log(resultado); 

// Ahora con ES7.
/*
    Ya no es necesario usar meth.
*/

let resultadoDos = base ** exponent; // Obtenemos el mismo resultado. 
console.log(resultadoDos) 

// Antes de ES7: Includes. 

const theSimpsons = [ 'Homero', 'Marge', 'Bart', 'Lisa', 'Maggie', ]; 
console.log(theSimpsons.includes('pepe')) // Esto nos retorna un true o false.

// ES8
/*
    Esta version de ECMAScript salio en 2017, y trajo cosas nuevas como 
    1) async
    2) await
    3) variables y metodos estaticos
    4) Object.values
*/

// Variables y metodos estaticos.
/*
    Son variables o metodos que estan asociados a la clase, no son de exclusividad del objeto
*/

class Contador {
    static cantidad = 0;

    constructor() {
        Contador.cantidad++; 
    }

    static obtenerCantidad() {
        return Contador.cantidad; 
    }
}

const contador1 = new Contador();
const contador2 = new Contador();
const contador3 = new Contador();

console.log(Contador.obtenerCantidad());

// Object.values.
/*
    Nos devuelve un array con los valores y propiedades de un objeto.
*/

const usuario = {
    nombre: 'Miguel',
    apellido: 'Salazar',
    edad: 32,
    profesion: 'programador'
}

const respuesta = Object.entries(usuario)
console.log( respuesta);
console.log(typeof usuario);

//Object.values nos devuelve un arrays de objetos.
//Object.keys nos devuelve las claves de un array de un objeto.
//Object.entries nos devuelve un arrays de arrays.

// ES9
/*
    Esta version de ECMAScript salio en 2018, y nos trajo estas novedades.
    1) finally. se ejecuta siempre se cumpla la promesa o no se cumpla. 
    2) Spress Operator. 
*/

// Spress Operator. 
/* 
    Nos permite desparramar elementos de un objeto iterable de forma individual.
*/

const nombres = [ 'Miguel', 'Samuel', 'Luciana' ]
console.log( ... nombres )

// Copia por referencia con Spress Operator.

const copia = [...nombres]

console.log( nombres, copia ) // Si quiero copiar un objeto hago lo mismo. 