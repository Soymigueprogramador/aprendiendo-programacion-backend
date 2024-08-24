/*
    El Scope es el alcance que tiene una variable en js. 
    tenemos 2 tipos de scope:
    1) Scope global:
        Las variables declaradas pueden ser accedidas desde cualquier parte del programa. 
    Scope local:
*/ 

// Scope global.
// Si esta variable esta fuera de un bloque de codigo se lo considera como global. 
// Scope local.
// Si la variable esta dentro de un bloque de codigo se lo considera local y solo se puede acceder a ella dentro de ese bloque de codigo. 
// Ejemplo en codigo: 

// Scope global:
let global1 = 2024;

function saludito() {
    console.log('Este es el año' + global1);
}; 
saludito();

// Scope local.
function saludito() {
    console.log('Este es el año' + global1);
    let curso = 'Backend'; //Esta es una variable de scope local.
    console.log('Este año estoy aprendiendo' + curso)
}; 
saludito();