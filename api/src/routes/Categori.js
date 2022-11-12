const express = require('express');
const router = express.Router();
const controllers = require('./controllers/Categories');

router.get('/', async(req, res) => {
    try {
        const categories = await controllers.listCategories();
        res.status(200).json({categories: categories});
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.post('/', async(req, res) => {
    const {name} = req.body;
    if(!name) {
        res.status(400).json({info: 'falta ingresar un dato'})
    }
    try {
        controllers.postCategori(name);
        res.status(200).send('Categoria agregado');
    } catch (error) {
        alert('Hubo un problema', error);
    }
});

module.exports = router;