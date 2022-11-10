const express = require('express');
const router = express.Router();
const controllers = require('./controllers/Buyer');
const { Buyer } = require('../db')

router.get('/', async (req, res, next) => {
    try {
        const buyers = await controllers.listBuyers();
        res.status(200).json({buyers: buyers});
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const allBuyers = await controllers.listBuyers();
    try {
        if(id) {
            const buyerId = allBuyers.filter(e => e.id == id);
            buyerId.length?
            res.status(200).json(buyerId) :
            res.status(404).send('Comprador no encontrado')
        }
    } catch (error) {
        alert('Hubo un problema', error)
    }
});

router.post('/', async (req, res) => {
    const {name, password} = req.body;
    if(!name || !password) {
        return res.status(400).json({info: 'falta ingresar un dato'})
    }
    try {
        const createBuyer = Buyer.create({
            name: name,
            password: password
        })
        res.status(200).send('Comprador agregado')
    } catch (error) {
        alert('Hubo un problema', error)
    }
});


module.exports = router;