/*
    Programacion orientada a objeto (POO).
    L programacion orientada a objetos es un paradigma de programacion (forma de ver el codigo).
    este paradigma es propio del lenguajes como (C o Java), hasta que en el año 2015 con la llegada de ES6 (ECMAScript 6) JavaScript copia la sintaxis de la 
    programacion orientada a objetos.
    debemos tener en cuenta que JavaScript no es un lenguaje multiparadigma en un 100%, si no que JavaScript es un lenguaje basado en prototipos.
*/

/* 
    ¿ que es un prototipo ?
    JavaScript es un lenguaje basado en prototipos y los prototipos son objetos que permiten heredarles sus metodos y propiedades a otros objetos.
*/

// Herencia por prototipo. 

const animal1 = {
    especie: 'Perro',
    comer: function() {
        console.log('Estoy comiendo');
    }
};

const animal2 = {
    especie: 'Gato',
    tengo: function() {
        console.log('Tengo hambre');
    }
};


Object.setPrototypeOf(animal2, animal1);

animal2.comer(); 
animal2.tengo(); 

animal2.tengo = function() {
    console.log('Ya me llené');
};


// El objeto animal2 hededa las propiedades y los metodos del aninal1.
// Esto no se hace en la vida real. 

