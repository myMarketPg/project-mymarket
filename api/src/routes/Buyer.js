const express = require('express');
const router = express.Router();
const controllers = require('./controllers/AllBuyers');
const controllers = require('./controllers/PostBuyer');
const controllers = require('./controllers/FindBuyer');

router.get('/', async (req, res, next) => {
    try {
        const buyers = await controllers.listBuyers();
        res.status(200).json({buyers: buyers});
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.get('/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const buyer = await controllers.findBuyer(id);
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
        controllers.postBuyer(name, password);
        res.status(200).send('Comprador agregado');
    } catch (error) {
        alert('Hubo un problema', error);
    }
});


module.exports = router;