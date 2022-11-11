const express = require('express');
const router = express.Router();
const controllers = require('./controllers/PostBuyer');

router.post('/', async(req, res) => {
    const {name, password} = req.body;
    if(!name || !password) {
        res.status(400).json({info: 'falta ingresar un dato'})
    }
    try {
        controllers.postBuyer(name, password);
        res.status(200).send('Comprador agregado');
    } catch (error) {
        alert('Hubo un problema', error);
    }
});

module.exports = router;