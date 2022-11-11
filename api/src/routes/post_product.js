const express = require('express');
const router = express.Router();
const controllers = require('./controllers/PostProduct');

router.post('/', async(req, res) => {
    const { name, image, stock, description, price, featured } = req.body;
    if( !name || !image || !stock || !description || !price || !featured ) {
        res.status(400).json({info: 'falta ingresar un dato'})
    }
    try {
        controllers.postProduct(name, image, stock, description, price, featured);
        res.status(200).send('Producto añadido');
    } catch (error) {
        res.status(404).send(error.message);
    }
});

module.exports = router;