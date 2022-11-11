const express = require('express');
const router = express.Router();
const controllers = require('./controllers/AllStores');

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