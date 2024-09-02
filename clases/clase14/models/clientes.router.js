import mongoose from 'mongoose'

const clientesCollection = 'clientes'

 // Creamos el esquema.

 /*
    El esquema es el modelo de coleccion con el que vamos a trabajr y aca definimos que elementos va a tener y que tipos de datos vamos a usar.
 */

    // Creamos el esquema
const clientesSchema = new mongoose.Schema({
    //Definimos los tipos de datos que vamos a tener en este esquema
    id: Number,
    nombre: String,
    email: String,
    direccion: String,
    telefono: Number,
    fechaRegistro: Number,
})

// Definimos el modelo que le dice a mongoose con que datos vamos a trabajar.

/*
    Le pasamos el esquema y la coleccion.
*/

const clientesModel = mongoose.model( clientesCollection, clientesSchema )

// Exportamos el modelo.
export default clientesModel;