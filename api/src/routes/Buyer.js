const express = require('express');
const router = express.Router();

const controller = require('./controllers/Buyer');

router.get('/', async (req, res, next) => {
    try {
        const buyers = await controller.findBuyer();
        res.status(200).json({buyers: buyers});
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.get('/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const buyer = await controller.findBuyer(id);
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
        controller.postBuyer(name, password);
        res.status(200).send('Comprador agregado');
    } catch (error) {
        alert('Hubo un problema', error);
    }
});

module.exports = router;