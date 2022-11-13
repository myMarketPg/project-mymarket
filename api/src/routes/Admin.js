const express = require('express');
const router = express.Router();
const controller = require('./controllers/Admin');

router.get('/', async(req, res) => {
    try {
        const admins = await controller.listAdmins();
        res.status(200).json({admins: admins});
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.post('/', async(req, res) => {
    const {userName, password} = req.body;
    if(!name || !password) {
        res.status(400).json({info: 'falta ingresar un dato'})
    }
    try {
        controller.postAdmin(userName, password);
        res.status(200).send('Vendedor agregado');
    } catch (error) {
        alert('Hubo un problema', error);
    }
});

module.exports = router;