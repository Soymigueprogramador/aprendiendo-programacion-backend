// Trabajando con promesas en file system.
/*
    El trabajo con promesas es lo mas recomendado y usando dentro de file system.
    para poder trabajar con promesas debemos llamar al modulo fs con el metodo .promises
*/

// Promesas.
/**
    * para trabajar con las promesas debemos entender que esas se usan con async y await, esto frena la ejecucion del codigo hasta que se cumpla la promesa.
    * para ellos debemos seguir estos pasos:
    * 1. Creamos una funcion ( const nombreFuncion = async () {} )
    * 2. Dentro de la funcion y antes de iniciar la linea de codigo usando ( await )
    * 3. llamamos al modulo fs con la propiedad .promises y despues le indicamos lo que va hacer
    * 4. Llamamos a la funcion y levantamos el servidor
 */

const fs = require('fs')

const promesas = './promesas.txt'

const operaciones = async () => {
    // Creamos un archivo.
    await fs.promises.writeFile(promesas, 'Hola promesas')
    
    // Leemos un archivo.
    const contenido = await fs.promises.readFile(promesas, 'utf-8')
    console.log(contenido)

    // Agregando texto adicional.
    await fs.promises.appendFile(promesas, ' esto es facil')

    // Eliminamos el archivo.
    await fs.promises.unlink(promesas)
};
operaciones()

// Esto tambien se puede usar con un ( try y catch ) ya que es lo mismo.

// La misma operacion pero con un try y catch.

const operaciones1 = async () => {
    try {
        // Creamos un archivo.
        await fs.promises.writeFile(promesas, 'Hola promesas');
        console.log('Archivo creado.');

        // Leemos un archivo.
        const contenido = await fs.promises.readFile(promesas, 'utf-8');
        console.log('Contenido del archivo:', contenido);

        // Agregando texto adicional.
        await fs.promises.appendFile(promesas, ' esto es facil');
        console.log('Texto adicional agregado.');

        // Eliminamos el archivo.
        await fs.promises.unlink(promesas);
        console.log('Archivo eliminado.');
    } catch (error) {
        console.error('Ocurrió un error:', error);
    }
};

operaciones1();