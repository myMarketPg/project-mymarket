const express = require('express');
const router = express.Router();
const controllers = require('./controllers/PostStore');

router.post('/', async(req, res) => {
    const { banner, logo, phoneNumber, email, adress } = req.body;
    if(!banner || !logo || !phoneNumber || !email || !adress) {
        res.status(400).json({info: 'falta ingresar un dato'})
    }
    try {
        controllers.postStore(banner, logo, phoneNumber, email, adress);
        res.status(200).send('Tienda creada');
    } catch (error) {
        res.status(404).send(error.message);
    }
});

module.exports = router;