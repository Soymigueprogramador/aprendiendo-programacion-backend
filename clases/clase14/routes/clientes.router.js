import express from 'express';
// Importamos el modelo.
import clientesModel from '../models/clientes.router.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const clientes = await clientesModel.find(); 
        res.json(clientes);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor');
    }
});

router.post('/', async (req, res) => {
    try {
        const cliente = new clientesModel(req.body); // Se corrige la instancia del modelo
        await cliente.save();
        res.status(201).send('Cliente guardado con éxito!');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor');
    }
});

export default router;