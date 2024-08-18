import express from "express";

const router = express.Router();

const usuarios = [];

// configuramos las rutas.
router.post('/', (req, res) => {
    const nuevoUsuario = req.body;
    usuarios.push(nuevoUsuario); 
    res.send({ status: 'success', message: 'Usuario creado con éxito' });
});

router.get('/', (req, res) => {
    res.send(usuarios);
});

export default router;