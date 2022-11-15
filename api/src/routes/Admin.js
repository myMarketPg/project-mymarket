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
    if(!userName || !password) {
        res.status(400).json({info: 'falta ingresar un dato'})
    }
    try {
        controller.postAdmin(userName, password);
        res.status(200).send('Vendedor agregado');
    } catch (error) {
        alert('Hubo un problema', error);
    }
});

router.put('/:id', async(req, res) => {
    const {id} = req.params;
    const {userName, password} = req.body;
    try {
        controller.putAdmin(id, userName, password);
        res.status(200).send('Datos actualizados');
    } catch (error) {
        alert('Hubo un problema', error);
    }
})

module.exports = router;