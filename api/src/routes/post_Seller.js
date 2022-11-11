const express = require('express');
const router = express.Router();
const controllers = require('./controllers/PostSeller');

router.post('/', async(req, res) => {
    const {name, email, password} = req.body;
    if(!name || !email || !password) {
        res.status(400).json({info: 'falta ingresar un dato'})
    }
    try {
        controllers.postSeller(name, email, password);
        res.status(200).send('Vendedor agregado');
    } catch (error) {
        alert('Hubo un problema', error);
    }
});

module.exports = router;