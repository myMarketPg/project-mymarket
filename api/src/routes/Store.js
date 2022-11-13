const express = require('express');
const router = express.Router();
const controllers = require('./controllers/stores');

router.get('/', async (req, res, next) => {
    const stores = await controllers.listStores();
    return res.status(200).json({stores: stores});
});

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

router.put('/product/:id', (req, res) => {
    const {id} = req.params;
    const { name, image, description, rating } = req.body;

    let changeStore = {
        id: parseInt(id),
        name,  
        image, 
        description, 
        rating
    }

    if(!changeStore.name) {
        delete changeStore.name
    }
    if(!changeStore.image) {
        delete changeStore.image
    }
    if(!changeStore.description) {
        delete changeStore.description
    }
    if(!changeStore.rating) {
        delete changeStore.rating
    }
    try {
        let store =
        controllers.listStores().modifyStore(changeStore);
        res.status(200).send(store)
    } catch(error) {
        res.status(404).send({error: 'Producto no cambiado'})
    }
})

module.exports = router;