const express = require('express');
const router = express.Router();
const controller1 = require('./controllers/AllAdmins');
const controller2 = require('./controllers/PostAdmin');

router.get('/', async(req, res) => {
    try {
        const admins = await controller1.listAdmins();
        res.status(200).json({admins: admins});
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
        controller2.postAdmin(name, password);
        res.status(200).send('Vendedor agregado');
    } catch (error) {
        alert('Hubo un problema', error);
    }
});

module.exports = router;