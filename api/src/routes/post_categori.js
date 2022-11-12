const express = require('express');
const router = express.Router();
const controllers = require('./controllers/PostCategori');

router.post('/', async(req, res) => {
    const {name} = req.body;
    if(!name) {
        res.status(400).json({info: 'falta ingresar un dato'})
    }
    try {
        controllers.postCategori(name);
        res.status(200).send('Categoria agregado');
    } catch (error) {
        alert('Hubo un problema', error);
    }
});

module.exports = router;