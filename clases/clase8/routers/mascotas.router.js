// Router es una funcion de Expres asi que debemos de importarla y lluego llamarla.

import express from "express";

const router = express.Router();

const mascotas = [];

// configuramos las rutas.
router.post('/', (req, res) => {
    const nuevaMascota = req.body;
    mascotas.push(nuevaMascota); 
    res.send({ status: 'success', message: 'Mascota creada con éxito' });
    console.log(mascotas);
});

router.get('/', (req, res) => {
    res.send(mascotas);
});

export default router;