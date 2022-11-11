const express = require('express');
const router = express.Router();
const controllers = require('./controllers/PostAdmin');

router.post('/', async(req, res) => {
    const {userName, password} = req.body;
    if(!userName || !password) {
        res.status(400).json({info: 'falta ingresar un dato'})
    }
    try {
        controllers.postAdmin(userName, password);
        res.status(200).send('Vendedor agregado');
    } catch (error) {
        alert('Hubo un problema', error);
    }
});

module.exports = router;