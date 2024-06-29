// Clase 1: Principios vasicos de JavaScript

// Plantillas literales. 
// Con la llegade de "ECMAScriptE6" se implementarons las plantillas literales, estas nos permien concatenar datos que estan en una variablle de una forma mas simple. 

// Antes de las plantillas literales: 
// Si queriamos mostrar datos en consola teniamos que hacer esto: 

let mascota = 'Procer';
let edad = 6;
console.log('Mi mascota se llama ' + mascota + ' y tiene ' + edad + 'años');

// Ahora con las Plantillas literales: 
// Con la   de "ECMAScriptE6" se sumanos las "Backsticks" ´´. 
console.log(`${mascota} tiene ${edad} años`); 

// Con el uso del signo de pesos y las llavemos podemos usarlas para correr mas codigo de JavaScript '${}' 
console.log(`Mi amigo ${mascota} tiene ${edad + 1}`);