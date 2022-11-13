const express = require('express');
const router = express.Router();
const controller1 = require('./controllers/AllSellers');
const controller2 = require('./controllers/PostSeller');

router.get('/', async(req, res) => {
    try {
        const sellers = await controller1.listSellers();
        res.status(200).json({sellers: sellers});
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.post('/', async(req, res) => {
    const {name, email, password} = req.body;
    if(!name || !email || !password) {
        res.status(400).json({info: 'falta ingresar un dato'})
    }
    try {
        controller2.postSeller(name, email, password);
        res.status(200).send('Vendedor agregado');
    } catch (error) {
        alert('Hubo un problema', error);
    }
});

module.exports = router;