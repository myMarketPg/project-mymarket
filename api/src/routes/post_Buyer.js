const express = require('express');
const router = express.Router();
const controllers = require('./controllers/PostBuyer');

router.post('/', async(req, res) => {
    const {name, phoneNum, email, password, addres} = req.body;
    if(!name || !phoneNum || !email || !password || !addres) {
        res.status(400).json({info: 'falta ingresar un dato'})
    }
    try {
        controllers.postBuyer(name, phoneNum, email, password, addres);
        res.status(200).send('Comprador agregado');
    } catch (error) {
        alert('Hubo un problema', error);
    }
});

module.exports = router;