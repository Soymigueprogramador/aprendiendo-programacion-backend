const fs = require('fs')

// Trabajando con datos complejos.
/*

*/const archivoArgento = './archivoArgento.json'

const arrayPersona = [
    { nombre: 'Pepe', apellido: 'Argento', edad: 50 },
    { nombre: 'Moni', apellido: 'Argento', edad: 45 },
    { nombre: 'Paola', apellido: 'Argento', edad: 17 },
    { nombre: 'Coky', apellido: 'Argento', edad: 15 },
    { nombre: 'Fatiga', apellido: 'Argento', edad: 7 },
]


const guardarArchivo = async () => {
    try {
        // Guardando un archivo.
        await fs.promises.writeFile(archivoArgento, JSON.stringify(arrayPersona, null, 2));
    } 
    catch (error) {
        console.log('Ocurrió un error', error);
    }
}

const leerArchivo = async () => {
    try {
        const nuevoArray = await fs.promises.readFile(archivoArgento, 'utf-8')
        const objetoNuevo = JSON.parse(nuevoArray)
        console.log(nuevoArray)
    }
    catch (error) {
        console.log('Ocurrió un error', error);
    }
}

const actualizarArchivo = async () => {
    try {
        const nuevoDato = { nombre: 'Suegra', apellido: 'Desconocido', edad: 70 };
        const datosExistentes = await fs.promises.readFile(archivoArgento, 'utf8');
        const arrayDatos = JSON.parse(datosExistentes);
        arrayDatos.push(nuevoDato);
        await fs.promises.writeFile(archivoArgento, JSON.stringify(arrayDatos, null, 2));
        console.log('Archivo actualizado correctamente');
    } catch (error) {
        console.log('Ocurrió un error', error);
    }
};

/*
    const eliminarArchivo = async (archivoArgento) => {
    try {
        await fs.promises.unlink(archivoArgento);
        console.log('Archivo eliminado exitosamente');
    } catch (error) {
        console.error('Error al eliminar el archivo:', error);
    }
}; eliminarArchivo('ruta/al/archivo.txt');
*/


guardarArchivo();
leerArchivo(); 
actualizarArchivo()