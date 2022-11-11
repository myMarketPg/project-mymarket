const express = require('express');
const router = express.Router();
const controllers = require('./controllers/PostStore');

router.post('/', async(req, res) => {
    const { name, image, description, rating } = req.body;
    if(!name || !image || !description || !rating) {
        res.status(400).json({info: 'falta ingresar un dato'})
    }
    try {
        controllers.postStore(name, image, description, rating);
        res.status(200).send('Tienda creada');
    } catch (error) {
        res.status(404).send(error.message);
    }
});

module.exports = router;