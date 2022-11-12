const express = require('express');
const router = express.Router();

const controller1 = require('./controllers/AllBuyers');
const controller2 = require('./controllers/FindBuyer');
const controller3 = require('./controllers/PostBuyer');

router.get('/', async (req, res, next) => {
    try {
        const buyers = await controller1.listBuyers();
        res.status(200).json({buyers: buyers});
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.get('/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const buyer = await controller2.findBuyer(id);
        res.status(200).send(buyer);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.post('/', async(req, res) => {
    const {name, password} = req.body;
    if(!name || !password) {
        res.status(400).json({info: 'falta ingresar un dato'})
    }
    try {
        controller3.postBuyer(name, password);
        res.status(200).send('Comprador agregado');
    } catch (error) {
        alert('Hubo un problema', error);
    }
});

module.exports = router;