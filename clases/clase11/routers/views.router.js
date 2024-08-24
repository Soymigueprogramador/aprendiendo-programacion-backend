import express from 'express';

const router = express.Router(); 

const productos = [
    {
      imagen: "https://example.com/product1.jpg",
      nombre: "Camiseta Deportiva",
      descripcion: "Camiseta ligera y transpirable, perfecta para hacer ejercicio.",
      precio: 29.99
    },
    {
      imagen: "https://example.com/product2.jpg",
      nombre: "Auriculares Inalámbricos",
      descripcion: "Auriculares con cancelación de ruido y batería de larga duración.",
      precio: 89.99
    },
    {
      imagen: "https://example.com/product3.jpg",
      nombre: "Mochila de Senderismo",
      descripcion: "Mochila resistente al agua con gran capacidad de almacenamiento.",
      precio: 59.99
    },
];

router.get('/', (req, res) => {
    // Creamos una estructura y la renderizamos
    const estudianteDeBackendConSamu = {
        nombre: 'Miguel',
        apellido: 'Salazar',
        soyBackend: false
    };
    res.render('index', { productos, estudianteDeBackendConSamu, title: ' Clase 9 con handlebars ' });
});

router.get('/contacto', (req, res) => {
    res.render('contacto', { title: ' contacto ' });
});

export   default router;